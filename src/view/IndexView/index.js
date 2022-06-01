import React from 'react';
import { Header } from '../../components/Header';
import { PhotoDay } from '../../components/PhotoDay';
import { Gallery } from '../../components/Gallery';
import './style.scss';

export const IndexView = () => {

    return (
        <>
           <Header/>
           <PhotoDay/>
           <Gallery/>
        </>
    )
}