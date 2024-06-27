import React,{useRef} from 'react'
import Logo from '../assets/Logo/logo.png';
import Login from '../Component/Login'
import { cart } from "../Data";
import {motion} from "framer-motion"
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const searchRef = useRef();
    const navbarRef = useRef();
    const cartRef = useRef();
    const searchHandler = () => {
        searchRef.current.classList.toggle("active");
    }
    const navbarHandler = () => {
        navbarRef.current.classList.toggle("active");
    }
    const cartHandler = () => {
        cartRef.current.classList.toggle("active");
        searchRef.current.classList.remove("active");
        navbarRef.current.classList.remove("active");
      };
  return (
    <header className="header">
        <NavLink to='/' className='logo'>
          <motion.img src={Logo} alt='logo'
          
          initial={{opacity:0 ,scale:0.5}}
          animate={{opacity:1, scale:1, rotate:360 }}
          transition={
            {duration:2,
            delay:1}
          } />
        </NavLink>
        <motion.nav
        
        
        className="navbar" ref={ navbarRef } >
        
          <NavLink
          
          initial={{y:100,opacity:0.5, }}
          whileInView={{y:1,opacity:1, }}
          transition={{
            delay:1,
            x:{type:"spring",stiffness:60},
            opacity:{duration:1},
            ease:"easeIn",
            duration: 1,
          }}
          
          to="/home">home</NavLink>
          <NavLink to="/about">about</NavLink>
          <NavLink to="/menu">menu</NavLink>
          <NavLink to="/products">products</NavLink>
          <NavLink to="/review">review</NavLink>
          <NavLink to="/contact">contact</NavLink>
          <NavLink to="/blogs">blogs</NavLink>
        </motion.nav>
        <div className="icons">
          <div
            className="fas fa-search"
            id="search-btn"
            onClick={searchHandler}
          ></div>
        
        <div id="login"  className=' text-white ' onClick={()=>document.getElementById('my_modal_3').showModal()
          
        } >
          <i class="fa-solid fa-user"></i>
         <Login />
          </div>

          <div
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={cartHandler}
          ></div>
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
          
        </div>
        <div className="search-form " ref={searchRef} >
        
          <input type="search" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
        <div className="cart-items-container"ref={cartRef}>
          { cart.map((item, index) => (
            <div className="cart-item" key={index * Math.random()}>
              <span className="fas fa-times"></span>
              <img src={item.img} alt="" />
              <div className="content">
                <h3>cart item 01</h3>
                <div className="price">$15.99/-</div>
              </div>
            </div>
          ))}
          <a to="#" className="btn">
            checkout now
          </a>
        </div>
    </header>
  )
}

export default Navbar
