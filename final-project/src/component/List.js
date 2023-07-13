import React, { useState } from 'react'
import Add from './Add.js'
import Edit from './Edit.js';



function List() {
  const [add, setAdd] = useState(false);
  const handleClose = () => setAdd(false);
  const [lists, setLists] = useState(JSON.parse(localStorage.getItem("list002")) || []);
  const [info, setInfo] = useState(false);
  const [edit,setEdit] = useState({});
  const [openCardKeys, setOpenCardKeys] = useState([]);

  console.log(openCardKeys)


  



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

  return (
    <>
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

      <div className='d-flex justify-content-between  nav '>
        <img src='https://www.ideastudio.com/wp-content/uploads/2018/07/lionheart.jpg' className='img-logo'/>
        <button
          onClick={() => setAdd(true)}
          className='bt'>+Add</button>
      </div>


      <div className="row row-cols-1 row-cols-md-4 g-4 sen con">
        {lists.map((item, key) => {
           let isOpen = openCardKeys.includes(key);


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
                <i className={`lists ${!isOpen ? "bi bi-caret-down-fill" : "bi bi-caret-up-fill"}`}
                    onClick={() => onToggleCard(key)}></i>
              </div>
              </div>

              <div className='desc'>
                
                
              <p >{item.des}</p>
              
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