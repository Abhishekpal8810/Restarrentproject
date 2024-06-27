import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login'

// ww-full mt-[10rem]
const Register = () => {
  return (
    <div className="  h-screen text-black  ">
        
 <div id="my_modal_3" className="border-[2px] shadow-md p-24 w-[600px] mt-24  ">
  <div className="modal-box ">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <NavLink to="/" className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2" id="btn">✕</NavLink>
    </form>
    <h3 className="font-bold text-4xl h3 mb-16">Signup</h3>
   <div className='mt-6'>
    {/* name */}
    <span className='space-y-2 text-4xl '>Name</span>
  <br />
    <input type="email" placeholder='enter your full name' className='w-90 border-2 py-4 form-inp text-2xl'  />
   </div>
   <div className='mt-6'>
    {/* email */}
    <span className='space-y-2 text-4xl '>email</span>
  <br />
    <input type="email" placeholder='enter your emil' className='w-90 border-2 py-4 form-inp text-2xl'  />
   </div>
   {/* password */}
   <div className='mt-6'>
    <span className='space-y-2 text-4xl '>password</span>
  <br />
    <input type="password" placeholder='enter your password' className='w-90 border py-4 form-inp text-2xl' />
   </div>
   {/* button */}
   <div className='flex justify-around items-center mt-6 mb-6   '>
    <button className='bg-yellow-400 text-white rounded-md px-4 py-4 
    hover:tracking-widest text-3xl '>Signup</button>
    <p className='text-4xl'>Have account? <NavLink to="/"  className='underline text-blue-500 text-4xl' onClick={()=>document.getElementById('my_modal_3').showModal()}>
        
        Login
        <Login />
        </NavLink ></p>
   </div>
  </div>
</div>

    </div>
  )
}

export default Register
