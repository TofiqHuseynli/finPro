import React, { useState } from "react";
import Add from "./Add.js";
import Edit from "./Edit.js";
import Navbar from "./Navbar.js";

function List() {
  const [add, setAdd] = useState(false);
  const handleClose = () => setAdd(false);
  const [lists, setLists] = useState(JSON.parse(localStorage.getItem("list002")) || []);
  const [info, setInfo] = useState(false);
  const [edit, setEdit] = useState({});
  const [openCardKeys, setOpenCardKeys] = useState([]);
  const [openMore, setOpenMore] = useState([]);

  console.log(openMore);

  const handleDelete = (key) => {
    let newList = lists;
    newList.splice(key, 1);
    setLists([...newList]);
    localStorage.setItem("list002", JSON.stringify(newList));
  };

  const onEdit = (data) => {
    let newList = lists.map((item, key) => (data.id === key ? data : item));
    setLists(newList);
    localStorage.setItem("list002", JSON.stringify(newList));
    setInfo(true);
  };

  

  const onToggleCard = (key) => {
    let keys = [...openCardKeys];
    if (keys.includes(key)) {
      keys = keys.filter((index) => index !== key);

      let mor = [...openMore];
      mor = mor.filter((index) => index !== key); //close desc
      setOpenMore(mor);
    } else {
      keys.push(key);
    }

    setOpenCardKeys(keys);
  };

  const onMore = (key) => {
    let mor = [...openMore];

    if (mor.includes(key)) {
      mor = mor.filter((index) => index !== key);
    } else {
      mor.push(key);
    }
    setOpenMore(mor);
  };

  return (
    <>
      <Navbar setAdd={setAdd} />

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

          return (
            <div className="col bod" key={key} v>
              <div className={!isOpen ? "card close-description" : "open-description"}>
                <div className="element-nav">
                  <div className="card-body cb">
                    <img src={item.img} className="card-img-top im" />
                    <h6>{item.title}</h6>
                  </div>
                  <div className="btns d-flex">
                    <div>
                    <i
                      onClick={() => handleDelete(key)}
                      className="bi bi-trash3-fill"
                    ></i>
                    </div>
                    <div>
                    <i
                      onClick={() => {
                        setEdit({ ...item, id: key });
                        setInfo(true);
                      }}
                      className="bi bi-info-square-fill"
                    ></i>
                    </div>
                   
                   
                    <div className={isOpen? "arrow-ico-div" : "arrow-div" }>
                    <i className="bi bi-caret-down-fill"
                      onClick={() => {
                        onToggleCard(key);
                      }}
                    ></i>
                    </div>
                    
                  </div>
                </div>

                <div className="desc">
                  {/* {item.des.length > 500 ? <div><p>{isOpenMore ? item.des :
                 item.des.slice(0, 500)}</p> <button onClick={()=>moreFunc(key)} className={!isOpenMore ? 'more-btn' : 'more-hide' }><u>more</u></button></div> :
                  <p>{item.des}</p>}
                 */}

                  {item.des.length < 500 ? (
                    <p>{item.des}</p>
                  ) : (
                    <p>
                      {isOpenMore ? item.des : item.des.slice(0, 500)}

                      <span
                        style={{ cursor: "pointer" }} 
                        className="text-primary float-end"
                        onClick={() => onMore(key)}
                      >
                        <u>{isOpenMore ? "close" : "more"}</u>
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default List;
