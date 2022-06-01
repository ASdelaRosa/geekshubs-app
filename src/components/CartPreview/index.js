import React, { useEffect, useState, useRef } from 'react';
import cart from '../../resources/cart.png';
import { getCart } from '../../services/cart';
import './style.scss';

export const CartPreview = () =>{

    const ref = useRef();
    const [visiblePreview, setVisiblePreview] = useState(false);
    const [content, setContent] = useState([]);

    useEffect(() => {
        const checkIfClickedOutside = e => {
          if (visiblePreview && ref.current && !ref.current.contains(e.target)) {
            setVisiblePreview(false)
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        getCart().then((content)=>{setContent(content)});
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [visiblePreview])

    return ( 
        <>
            <div className="cart_corner">
                <span className="cart_count">{content.length}</span>
                <button className="cart_button" onClick={()=>setVisiblePreview(oldState => !oldState)}>
                    <img src={cart} className="cart_icon" alt="Cart" />
                </button>
                {visiblePreview && <div className="cart_preview" ref={ref}>
                    <div className="cart_preview_header">
                        <span className="close_button" onClick={()=>setVisiblePreview(false)}>X</span>
                    </div>
                    {
                        content.map((item, key)=>{
                            return <div className="cart_item" key={key}>
                                <div className="cart_info">
                                    <p>{item.title}</p>
                                    <p>${item.price}</p>
                                </div>
                                <img className="cart_img" src={item.img}></img>
                            </div>
                        })
                    }
                    <div className="cart_preview_footer">
                        <button className="clear_button">CLEAR</button>
                    </div>
                </div>}
            </div>
        </>
    )
}
