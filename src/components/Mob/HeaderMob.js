import React from 'react';
import logoMob from '../../img/Логотип (1).png';
import style from "../../style/header.module.css";
import menu from '../../img/Frame (4).png';
import shop from '../../img/Frame (5).png'

const HeaderMob = () => {
    return (
        <div className={`${style.header}`}>
            <div className='container '>
                <div className='row d-flex justify-content-around  mb-3'>
                    <div className='col-auto mt-3'><img src={shop} alt='shop'/></div>
                    <div className='col-auto mt-3 '><img src={logoMob} alt='logo'/></div>
                    <div className='col-auto mt-3 '><img src={menu} alt='menu'/></div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMob;