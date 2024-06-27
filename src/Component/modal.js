import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login'


const Modal = () => {
  
  return (
    <div >
      <dialog id="my_modal_3" className="modal w-1/3 ">
  <div className="modal-box">
    <Login/>
  </div>
   
</dialog>
    </div>
  )
}

export default Modal
