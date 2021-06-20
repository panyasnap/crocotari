import React from 'react';
import style from '../style/main.module.css'


const ImagePage = ({data}) => {
    return (
        <div>
            <img className={`${style.mainImg} w-100`} src={data} alt=''/>
            <h1 className={`${style.h1Text}`}>Преимущество магазина</h1>
        </div>
    );
};

export default ImagePage;

