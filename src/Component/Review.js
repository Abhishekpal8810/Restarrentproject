import React from "react";

import qouteImg from "../assets/images/quote-img.png";
import { review } from "../Data";
import {motion} from "framer-motion"
const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          customer's <span>review</span>
        </h1>

        <div className="box-container">
          {review.map((item, index) => (
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
              <img src={qouteImg} alt="" className="quote" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nulla sit libero nemo fuga sequi nobis? Necessitatibus aut
                laborum, nisi quas eaque laudantium consequuntur iste ex aliquam
                minus vel? Nemo.
              </p>
              <img src={item.img} className="user" alt="" />
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;