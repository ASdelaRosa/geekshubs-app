import React from 'react';
import './style.scss';

export const AddToCartButton = (props) =>{

    const addToCart = ()=>{
        console.log("Future implementation");
    }

    return (
        <>
            <button className="add_to_cart_button" onClick={addToCart}>ADD TO CART</button>
        </>
    )
}