import React from 'react';
import { CartPreview } from '../CartPreview';
import bejamas from '../../resources/bejamas.png';
import './style.scss';

export const Header = (props) =>{

    const mql =  matchMedia('(min-width: 850px)');

    return (
        <>
            <header className="header">
                {!mql.matches && <img className="bejamas_logo" src={bejamas}/>}
                <CartPreview/>
            </header>
        </>
    )
}