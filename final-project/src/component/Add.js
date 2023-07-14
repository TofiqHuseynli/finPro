import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



function Add({add,setAdd,lists,setLists,handleClose}) {

const [title,setTitle]=useState("");
const [des,setDes]=useState("");
const [img,setImg]=useState("");



const handelSubmit=()=>{
  if(title.length==0 || des.length==0 || img.length==0){
    window.alert("test")
  }else{

  
  let newList = lists;
  newList.push({
    title:title,
    des:des,
    img:img
  })
  localStorage.setItem("list002", JSON.stringify(newList));
  setLists(newList);
  setAdd(false)
  setTitle("");
  setDes("");
  setImg("");
}
}
  return (
    <div>
            <Modal show={add} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modal-bod'>
            <lable className='title-lab'>Title</lable>
            <input
            placeholder='Daxil edin'
            onChange={(e)=>setTitle(e.target.value)}
            type='text'className='form-control mb-4 mt-2' />
            <lable>Description</lable>
            <textarea
            placeholder='Daxil edin'
            rows="5" 
            onChange={(e)=>setDes(e.target.value)}
            type='text'className='form-control mb-4 mt-2' />
            <lable>Img(logo)</lable>
            <input 
            placeholder='Daxil edin'
            onChange={(e)=>setImg(e.target.value)}
            type='text'className='form-control mb-3 mt-2' />
            <Button 
            onClick={handelSubmit}
            variant="primary" className='w-100 mt-3 btn-sub'>
            Submit
          </Button>
          </div>
        </Modal.Body>
      </Modal>
        </div> 
  )
}

export default Add

