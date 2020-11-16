import React from 'react';
import './Course.css'
import {Button} from 'react-bootstrap'
const Course = (props) => {
const {name,instructor,img,price}=props.course
    return (
        <div className="course">
            <div className="">
            <img src={img}></img>
            </div>
            <div className="course-name">
            <h1>Name :{name}</h1>
            <h2>Instructor :{instructor}</h2>
             <h3>Price :{price}</h3>
             <Button  variant="warning" onClick={()=>(props.handleBtn(props.course))}>Enrool Now</Button>
            </div>
        </div>
    );
};

export default Course;