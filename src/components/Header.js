import React from 'react';
import style from '../style/header.module.css'
import logo from '../img/Логотип.svg'
import shop from '../img/Frame.png'
import contact from '../img/Frame (1).png'
import frame from '../img/Frame.svg'


const Header = () => {
    return (
        <div className={`${style.header}`}>
            <div className='container'>
                <div className='row d-flex justify-content-between'>
                    <div className='col-sm-1 col-lg-1 col-xl-1 '><img className='mt-3 ' src={logo} alt={'logo'}/></div>
                    <div className='col-sm-5 col-lg-4 col-xl-4 row d-flex justify-content-around ml-5 mt-4'>
                        <button className='col-sm-4 col-md-4 col-lg-4 col-xl-4 ml-5'>Женщинам</button>
                        <button className='col-sm-4 col-md-4 col-lg-4 col-xl-4'>Мужчинам</button>
                        <button className='col-sm-4 col-md-4 col-lg-4 col-xl-4'>Контакты</button>
                    </div>
                    <div className='row col-sm-5 col-lg-4 col-xl-4 offset-lg-2 offset-lx-2  mt-4'>
                        <input className='col-sm-7 col-lg-7 col-xl-7 ' placeholder={'Введите запрос'}
                               type="text"/>
                        <div className='col-sm-5 col-lg-5 col-xl-5 row'>
                            <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 cursor'><img src={frame} alt='search'/></div>
                            <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 cursor'><img src={contact} alt='contact'/></div>
                            <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 cursor'><img src={shop} alt='shop'/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;