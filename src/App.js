import React from 'react'
import "./Style/style.css"
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Menu from './Component/Menu'
import Products from './Component/Products'
import Review from './Component/Review'
import Contact  from './Component/Contect'
import Blog from './Component/Blogs'
import Footer from './Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Register from './Component/Register'
// import Signup from './Component/Signup'


const App = () => {
  return (
    <div>
      {/* <Navbar />
      <Home />
      <About />
      <Menu />
      <Products />
      <Review />
      <Contact />
      <Blog />
      <Footer /> */}
      <BrowserRouter>
      <Navbar/>
      <div className='mt-[5rem]'>

   
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
       
        <Route path="/signup" element={<Register />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/review" element={ <Review />}/>
        <Route path="/contect" element={ <Contact />}/>
        <Route path="/blog" element={ <Blog />}/>
       
       

      </Routes>   
      </div>
      {/* <About />
      <Menu />
      <Review />
      <Contact />
      <Blog /> */}
      <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App
