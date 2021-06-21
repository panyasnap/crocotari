import React, {useContext} from 'react';
import img1 from '../img/1 (49) 1.jpg';
import img2 from '../img/1 (145) 1.jpg';
import img3 from '../img/1 (35) 1.jpg';
import img4 from '../img/1 (108) 1.jpg';
import img5 from '../img/1 (157) 1.jpg';
import img6 from '../img/1 (96) 1.jpg';
import style from '../style/instagram.module.css';
import {context} from "../utils/context";

const Instagram = () => {
    const {windowWidth} = useContext(context);
    return (

        <div className='container mb-5 '>
            <h2 className='mt-5 mb-5 d-flex justify-content-between'>Мы в Инстаграм</h2>
            {windowWidth > 990 ?
                <div>
                    <div className={`row col-sm-12 col-lg-12 col-xl-12 `}>
                        <img className='col-4' src={img1} alt='img'/>
                        <img className='col-4' src={img2} alt='img'/>
                        <img className='col-4' src={img3} alt='img'/>
                    </div>
                    <div className={`row col-sm-12 col-lg-12 col-xl-12 pt-4`}>
                        <img className='col-4' src={img4} alt='img'/>
                        <img className='col-4' src={img5} alt='img'/>
                        <img className='col-4 ' src={img6} alt='img'/>
                    </div>
                </div>
:
            <div>
                <div className={`d-flex`}>
                    <img className={`${style.img1} col-4 `} src={img1} alt='img'/>
                    <img className={`${style.img2} col-4 `} src={img2} alt='img'/>
                    <img className={`${style.test3} col-4 ` } src={img3} alt='img'/>
                </div>
                <div className={`d-flex pt-2`}>
                    <img className={`${style.img1} col-4 `} src={img4} alt='img'/>
                    <img className={`${style.img2} col-4 `} src={img5} alt='img'/>
                    <img className='col-4 ' src={img6} alt='img'/>
                </div>
            </div>}

        </div>
    );
};

export default Instagram;