import React from 'react'
import { product } from '../Data'
import {motion} from "framer-motion"

const Products = () => {
  return (
    <section className="products" id="products">
        <h1 className="heading">
          our <span>products</span>
        </h1>
        <div className="box-container">
          {product.map((item, index) => (
            <motion.div 
            
            initial={{x:-300,opacity:0.5, }}
            whileInView={{x:1,opacity:1, }}
            transition={{
              delay:0.2,
              x:{type:"spring",stiffness:60},
              opacity:{duration:1},
              ease:"easeIn",
              duration: 1,
            }}
            className="box" key={index * Math.random()}>
              <div className="icons">
                <a href="#" className="fas fa-shopping-cart"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <div className="content">
                <h3>fresh coffee</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">
                  $15.99 <span>$20.99</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </section>
  )
}

export default Products
