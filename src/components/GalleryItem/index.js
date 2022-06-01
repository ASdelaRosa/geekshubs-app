import React from 'react';
import { AddToCartButton } from '../AddtoCartButton';
import './style.scss';

export const GalleryItem = (props) =>{

    return (
        <>
            <div className="gallery_item">
                <div className="gallery_photo">
                    {props.item.bestSeller && <span className="best_seller">Best Seller</span>}
                    <img className="photo" src={props.item.img}/>
                    <div className="add_to_cart">
                        <AddToCartButton/>
                    </div>
                </div>
                <h4>{props.item.category}</h4>
                <h2>{props.item.title}</h2>
                <p>${props.item.price}</p>
            </div>
        </>
    )
}