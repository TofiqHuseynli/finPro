import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



function Add({add,setAdd,lists,setLists,handleClose}) {

const [title,setTitle]=useState("");
const [des,setDes]=useState("");
const [img,setImg]=useState("");



const handelSubmit=()=>{
  let newList = lists;
  newList.push({
    title:title,
    des:des,
    img:img
  })
  localStorage.setItem("list002", JSON.stringify(newList));
  setLists(newList);
  setAdd(false)
}
  return (
    <div>
        
            <Modal show={add} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <lable>Title</lable>
            <input
            onChange={(e)=>setTitle(e.target.value)}
            type='text'className='form-control mb-4' />
            <lable>Description</lable>
            <input
            onChange={(e)=>setDes(e.target.value)}
            type='text'className='form-control mb-4' />
            <lable>Img(logo)</lable>
            <input 
            onChange={(e)=>setImg(e.target.value)}
            type='text'className='form-control mb-3' />
            <Button 
            onClick={handelSubmit}
            variant="primary" className='w-100'>
            Submit
          </Button>
        </Modal.Body>
      </Modal>
        </div>
      
    
    
  )
}

export default Add

