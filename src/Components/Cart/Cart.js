import React from 'react';
import {Button} from 'react-bootstrap'
const Cart = (props) => {
const cart=props.cart
const courseTotal = cart.reduce((sum,course)=> sum+course.price,0)
const text = courseTotal/10;
    return (
        <div>
           <h1>Total Item Order : {cart.length}</h1>
            <p>price: {courseTotal}</p> 
             <p><span>Text : {text}</span></p>
             <p>Grand Total : {courseTotal+text}</p>
            <Button variant="success">place order</Button>
        </div>
    );
};

export default Cart;