import React from "react";
import { menu } from "../Data";
import {motion} from "framer-motion"
const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>

        <div className="box-container">
          {menu.map((item, index) => (
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
            
            className="box" key={index * Math.random()}>
              <img src={item.img} alt="" />
              <h3>tasty and healty</h3>
              <div className="price">
                $15.99 <span>20.99</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;