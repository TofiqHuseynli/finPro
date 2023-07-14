import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Edit({info,setInfo,edit,onEdit}) {
const [title,setTitle]= useState("");
const [des,setDes]=useState("");
const [img,setImg]=useState("")

React.useEffect(()=>{
  setTitle(edit.title);
  setDes(edit.des);
  setImg(edit.img)
},[info])

console.log({...edit,title,des,img});

  return (
    <div>
      <div>
        
        <Modal show={info} onHide={setInfo} >
    <Modal.Header closeButton>
      <Modal.Title>Info</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <lable>Title</lable>
        <input
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
        type='text'className='form-control mb-4 mt-2' />
        <lable>Description</lable>
        <textarea
        rows="5"
        onChange={(e)=>setDes(e.target.value)}
        value={des}
        type='text'className='form-control mb-4 mt-2' />
        <lable>Img(logo)</lable>
        <input
        onChange={(e)=>setImg(e.target.value)}
        value={img}
         type='text'className='form-control mb-3 mt-2' />
        <Button 
        onClick={()=>{
          onEdit({...edit,title,des,img})
          setInfo(false)
        }}
        variant="primary" className='w-100 mt-3 btn-sub'>
        Submit
      </Button>
    </Modal.Body>
  </Modal>
    </div>
    </div>
  )
}

export default Edit