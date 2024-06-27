import React from "react";
import AboutImg from "../assets/about/about-img.jpg";
import { motion } from "framer-motion"
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <motion.img
            
            initial={{scale:0.5,opacity:0.5, }}
            whileInView={{scale:1,opacity:1, }}
            transition={{
              delay:0.2,
              x:{type:"spring",stiffness:60},
              opacity:{duration:1},
              ease:"easeIn",
              duration: 2,
            }}
            src={AboutImg} alt="about" />
          </div>

          <motion.div 
          
          initial={{scale:0.5,opacity:0.5, }}
          whileInView={{scale:1,opacity:1, }}
          transition={{
            delay:0.2,
            x:{type:"spring",stiffness:60},
            opacity:{duration:1},
            ease:"easeIn",
            duration: 2,
          }}
          
          className="content">
            <h3>what makes our food special?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae
              ratione a officiis id temporibus autem? Quod nemo facilis
              cupiditate. Ex, vel?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              amet enim quod veritatis, nihil voluptas culpa! Neque consectetur
              obcaecati sapiente?
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
 