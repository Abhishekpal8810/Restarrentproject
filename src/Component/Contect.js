import React from "react";
import {motion} from "framer-motion"
const Contact = () => {
  return (
    <>
      <section class="contact" id="contact">
        <h1 class="heading">
          <span>contact</span> us
        </h1>
        <div class="row">
          <motion.iframe
          initial={{x:-200,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{
            delay:0.2,
            x:{type:"spring",stiffness:60},
            opacity:{duration:1},
            ease:"easeIn",
            duration: 1,
          }}
            class="map"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.456662284227!2d77.32761047500662!3d28.586074086189775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5dc52dee9db%3A0xd61ade68320b6847!2sNamrata%20Universal!5e0!3m2!1sen!2sin!4v1715759331337!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" 
          ></motion.iframe>

          <motion.form 
          initial={{x:200,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{
            delay:0.2,
            x:{type:"spring",stiffness:60},
            opacity:{duration:1},
            ease:"easeIn",
            duration: 1,
          }}  action="#">
          
          
         
            <h3>get in touch</h3>
            <div class="inputBox">
              <span class="fas fa-user"></span>
              <input type="text" placeholder="name" />
            </div>
            <div class="inputBox">
              <span class="fas fa-envelope"></span>
              <input type="email" placeholder="email" />
            </div>
            <div class="inputBox">
              <span class="fas fa-phone"></span>
              <input type="number" placeholder="number" />
            </div>
            <input type="submit" value="contact now" class="btn" />
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default Contact;