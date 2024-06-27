import React from 'react'
import { NavLink } from 'react-router-dom'


const Login = () => {

 

  
  return (
    <div >
      <dialog id="my_modal_3" className="modal w-1/3 ">
  <div className="modal-box">
    <form   method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2" id="btn"  >✕</button>
      {/* <NavLink to='/' className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2" id="btn" onClick={() =>document.getElementById("my_modal_3").closest()}>✕</NavLink> */}
   
    <h3 className="font-bold text-4xl h3">Login</h3>
   <div className='mt-6'>
    {/* email */}
    <span className='space-y-2'>email</span>
  <br />
    <input type="email" placeholder='enter your emil' className='w-90 border-2 py-1 form-inp'     />
    
   </div>
   {/* password */}
   <div className='mt-6'>
    <span className='space-y-2'>password</span>
  <br />
    <input type="password" placeholder='enter your password' className='w-90 border py-1 form-inp' />
   </div>
   {/* button */}
   <div className='flex justify-around items-center mt-6 mb-6   '>
    <button className='bg-yellow-400 text-white rounded-md px-5 py-2 
    hover:tracking-widest '>Login</button>
    <p className='text-3xl'>Not registered? <NavLink to="/signup"  className='underline text-blue-500'>Signup</NavLink >{" "}</p>
   </div>
   </form>
  </div>
</dialog>

    </div>
  )
}

export default Login
