import React from 'react'

function Navbar({setAdd}) {
    let stringTest = "slam necesen dostum tesr"
  return (
 
    <div className='d-flex justify-content-between  nav '>
    <img src='https://www.ideastudio.com/wp-content/uploads/2018/07/lionheart.jpg' className='img-logo'/>
    <button
      onClick={() => setAdd(true)}
      className='bt'><span className='plus'>+</span> Add</button>
  </div>
  )
}

export default Navbar
