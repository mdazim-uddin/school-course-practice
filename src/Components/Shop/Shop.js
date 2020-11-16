import React, { useState } from 'react';
import courseData from '../../CourseData/courseData';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Shop.css'
const Shop = () => {
    
const [course,setCourse] = useState(courseData)
const [cart,setCart]= useState([])

const handleBtn = (course)=> {
const newCart = [...cart,course]
setCart(newCart)
}
    return (
        <div className="shop">
           <div className="course-container">
                {
                    course.map((course)=> 
                    <Course course={course} handleBtn={handleBtn}></Course>)
                }
           </div>
           <div className="cart-container">
               <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;