import React, { useState, useEffect } from 'react';
import { AddToCartButton } from '../AddtoCartButton';
import { getPhoto } from '../../services/photoDay';
import './style.scss';

export const PhotoDay = (props) =>{

    const [photo, setPhoto] = useState(null);
    const mql = matchMedia('(min-width: 850px)');

    useEffect(() => {
        getPhoto().then((photo)=>setPhoto(photo));
    },[]);

    return (
        <>
            {photo && 
                <div className="photo_day">
                    <div className="photo_day_header">
                        <h1>{photo.title}</h1>
                        {mql.matches && <AddToCartButton/>}
                    </div>
                    <div className="photo_container">
                        <img className="photo" src={photo.img}/>
                        <span className="photo_day_tag">Photo of the day</span>
                    </div>
                    {!mql.matches && <AddToCartButton/>}
                    <div className="photo_data">
                        <div className="photo_description">
                            <h3>About {photo.title}</h3>
                            <h4>{photo.category}</h4>
                            <p>{photo.description}</p>
                        </div>
                        <div className="photo_details">
                            <h3>People also buy</h3>
                            <div className="also_like">
                                {photo.alsoLike.map((item, key)=>{
                                    return <img src={item.img} className="also_like_img" key={key}/>
                                })}
                            </div>
                            <h3>Detail</h3>
                            <p>Size: {photo.pixelSize} pixel</p>
                            <p>Size: {photo.size}</p>
                        </div>
                    </div>
                </div>
            }
            {!photo && <p>Photo of the day not found</p>}
        </>
    )
}