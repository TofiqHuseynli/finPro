import React, { useState } from 'react'
import Add from './Add.js'
import Edit from './Edit.js';
import  Navbar  from './Navbar.js';



function List() {
  const [add, setAdd] = useState(false);
  const handleClose = () => setAdd(false);
  const [lists, setLists] = useState(JSON.parse(localStorage.getItem("list002")) || []);
  const [info, setInfo] = useState(false);
  const [edit,setEdit] = useState({});
  const [openCardKeys, setOpenCardKeys] = useState([]);
  const [openMore, setOpenMore] = useState([]);

  console.log(openMore)


  



  const handleDelete = (key) => {
    let newList = lists;
    newList.splice(key, 1);
    setLists([...newList]);
    localStorage.setItem("list002", JSON.stringify(newList))
  }

  const onEdit = (data) => {
    let newList = lists.map((item, key) => (
      data.id === key ? data : item
    ));
    setLists(newList);
    localStorage.setItem("list002", JSON.stringify(newList));
    setInfo(true)
  }

  // const handleDes = (data)=>{
  //   lists.map((item, key) => {
  //     if(data.id === key ? data : item){
  //       return {...item, des: !item.des}
  //     }
  //     return item;
  //   })

  // }

  const onToggleCard = (key) => {
    // let keys = openCardKeys; // bele edende ishlemedi.
    let keys = [...openCardKeys];

    if (keys.includes(key)) {
        keys = keys.filter(index => index !== key)
    } else {
        keys.push(key)
    }

    setOpenCardKeys(keys)
}

const moreFunc = (key)=>{
  let mor = [...openMore];

  if(mor.includes(key)){
    mor = mor.filter(index => index !==key)
  }else{
    mor.push(key)
  }
  setOpenMore(mor);

}

  return (
    <>
      <Navbar
      setAdd={setAdd}
     />

      <Add
        lists={lists}
        setLists={setLists}
        add={add}
        setAdd={setAdd}
        handleClose={handleClose}
      />

      <Edit
        info={info}
        setInfo={setInfo}
        edit={edit}
        setEdit={setEdit}
        onEdit={onEdit}
      />

   


      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 sen con">
        {lists.map((item, key) => {
           let isOpen = openCardKeys.includes(key);
           let isOpenMore = openMore.includes(key);


           return(
            <div className="col bod" key={key}>
            <div className={!isOpen ? "card cr" : "test"}>
              <div className='element-nav'>
              <div className="card-body cb">
                 <img src={item.img} className="card-img-top im" /> 
                <h6>{item.title}</h6>
              </div>
              <div className='btns'>
                <i onClick={() => handleDelete(key)} className="bi bi-trash3-fill"></i>
                <i onClick={() => {
                  setEdit({ ...item, id: key })
                  setInfo(true)
                  }} className="bi bi-info-square-fill"></i>
                <i className={!isOpen ? "bi bi-caret-down-fill" : "bi bi-caret-up-fill"}
                    onClick={() =>{
                      moreFunc(isOpenMore ? key : isOpenMore )
                      onToggleCard(key)
                    } }></i>
              </div>
              </div>

              <div className='desc'>
                {item.des.length > 500 ? <div><p>{isOpenMore ? item.des : item.des.slice(0, 500)}</p> <button onClick={()=>moreFunc(key)} className={!isOpenMore ? 'more-btn' : 'more-hide' }><u>more</u></button></div> : <p>{item.des}</p>}
                
                
              

              
              </div>
              
              
            </div>
            

          </div>
           )
         

                })}

{/* <i class="bi bi-caret-up-fill">bi bi-caret-down-fill</i> */}

{/* arrow ? "bi bi-caret-down-fill" : "bi bi-caret-up-fill" */}

      </div>

    </>
  )
}

export default List