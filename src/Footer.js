import React from "react";
import {motion} from "framer-motion"

const Footer = () => {
  return (
    <>
      <section class="footer">
        <motion.div
         initial={{scale:0.5,opacity:0.5, }}
         whileInView={{scale:1,opacity:1, }}
         transition={{
           delay:0.2,
           x:{type:"spring",stiffness:60},
           opacity:{duration:1},
           ease:"easeIn",
           duration: 1,
         }}
        
        class="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
          <a href="#" class="fab fa-pinterest"></a>
        </motion.div>
        <motion.div
        
        
        initial={{x:300,opacity:0.5, }}
        whileInView={{x:1,opacity:1, }}
        transition={{
          delay:0.2,
          x:{type:"spring",stiffness:60},
          opacity:{duration:1},
          ease:"easeIn",
          duration: 1,
        }}class="links">
          <a href="#">home</a>
          <a href="#">about</a>
          <a href="#">menu</a>
          <a href="#">products</a>
          <a href="#">review</a>
          <a href="#">contact</a>
          <a href="#">blogs</a>
        </motion.div>
        <div class="credit">
          created by <span>Abhishek pal</span> | all rights reserved
        </div>
        <div class="custom-shape-divider-top-1712659503">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      </section>
    </>
  );
};

export default Footer;