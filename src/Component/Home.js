import React from "react";
import homeimg from "../assets/Home/pexels-daniela-constantini-5591664-removebg-preview.png"
import { motion} from "framer-motion"
import About from "./About";
import Menu from "./Menu";
import Products from "./Products";
import Review from "./Review";
import Contact from "./Contect";
import Blog from "./Blogs";





const Home = () => {
  return (
    <>
      <section className="home " id="home">
        <div className="content md:order-1 order-2 ">
          <motion.h3
           initial={{x:-200,opacity:0}}
           whileInView={{x:0,opacity:1}}
           transition={{
             delay:0.2,
             x:{type:"spring",stiffness:60},
             opacity:{duration:1},
             ease:"easeIn",
             duration: 1,
           }}>
            fresh <span >food in the </span>morning
          </motion.h3>
          <motion.p
           initial={{x:-200,opacity:0}}
           whileInView={{x:0,opacity:1}}
           transition={{
             delay:0.2,
             x:{type:"spring",stiffness:60},
             opacity:{duration:1},
             ease:"easeIn",
             duration: 1,
           }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            labore, sint cupiditate distinctio tempora reiciendis.
          </motion.p>
          <motion.a 
           initial={{x:-200,opacity:0}}
           whileInView={{x:0,opacity:1}}
           transition={{
             delay:0.2,
             x:{type:"spring",stiffness:60},
             opacity:{duration:1},
             ease:"easeIn",
             duration: 1,
           }}
          href="#" className="btn">
            get yours now
          </motion.a>
        </div>
        <div className="side-img md:order-2 order-1  ">
          <motion.img
          
          initial={{x:200,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{
            delay:0.2,
            x:{type:"spring",stiffness:60},
            opacity:{duration:1},
            ease:"easeIn",
            duration: 1,
          }}
          
          src={ homeimg } alt="logo" />
         

        </div>
        <div class="custom-shape-divider-bottom-1712658499">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      </section>
      <About />
      <Menu />
      <Products />
      <Review />
      <Contact />
      <Blog />

    </>
  );
};

export default Home;