import React from "react";
import { blog } from "../Data";
import {motion} from "framer-motion"
const Blog = () => {
  return (
    <>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          our <span>blogs</span>
        </h1>

        <div class="box-container">
          {blog.map((item, index) => (
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
            
            class="box" key={index * Math.random()}>
              <div class="image">
                <img src={item.img} alt="" />
              </div>
              <div class="content">
                <a href="#" class="title">
                  tasty and refreshing spices
                </a>
                <span>by admin / 3rd march, 2024</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                  dicta.
                </p>
                <a href="#" class="btn">
                  read more
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;