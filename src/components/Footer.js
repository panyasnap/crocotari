import React, {useContext} from 'react';
import logo from '../img/Логотип (2).png';
import logo1 from '../img/Логотип2.png';
import style from '../style/footer.module.css';
import vk from '../img/Vector.png';
import inst from '../img/instagram (3) 1.png';
import {context} from "../utils/context";

const Footer = () => {
    const {windowWidth} = useContext(context);
    return (
        <div>
            <div className={`${style.footerTop} `}>
                <div className='container'>
                    <div className='row col-sm-12 col-lg-12 col-xl-12 d-flex'>
                        {windowWidth > 575 ?
                       <div className={`${style.logoMobil} col-sm-5 col-md-4 col-lg-3 col-xl-3 `}> <img className=' mt-5 mb-5 w-100 ' src={logo1} alt='logo'/></div>
                            :

                        <div className={`${style.logoMobil} d-flex justify-content-center  `}> <img className='col-sm-4 col-md-4 col-lg-3 col-xl-3 mt-3 mb-3 ' src={logo} alt='logo'/></div>
                        }
                        <div
                            className={`${style.contactMobil} row col-sm-6 col-md-6 col-lg-6 col-xl-6 offset-ld-3 offset-sm-1 offset-md-2 mt-5`}>
                            <ul className='col-sm-4  col-lg-4 col-xl-4 '>
                                <li className={`${style.textLi}`}>Клиентам</li>
                                <li className='cursor mt-2'>Доставка</li>
                                <li className='cursor mt-1'>Возврат</li>
                                <li className='cursor mt-1'>Клубная карта</li>
                            </ul>
                            <ul className='col-sm-4 col-lg-4 col-xl-4'>
                                <li className={`${style.textLi}`}>Каталог</li>
                                <li className='cursor mt-2'>Женщинам</li>
                                <li className='cursor mt-1'>Мужчинам</li>
                            </ul>
                            <ul className='col-sm-4 col-lg-4 col-xl-4'>
                                <li className={`${style.textLi}`}>Контакты</li>
                                <li className='cursor mt-2'>Адреса магазинов</li>
                                <li className='cursor mt-1'>Личный кабинет</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {windowWidth > 767 ?
                <div className={`${style.footerBottom} `}>
                    <div className='container '>
                        <div className='row col-sm-12 col-lg-12 col-xl-12 '>
                            <div className='col-sm-2 col-lg-2 col-xl-2 mt-4 mb-4'>© 2021 Crocotari</div>
                            <div
                                className='col-sm-3 col-lg-3 col-xl-3 offset-2 offset-md-2 offset-sm-0 mt-4 mb-4 cursor'>Политика
                                конфиденциальности
                            </div>
                            <div className='col-sm-3 col-lg-3 col-xl-3 mt-4 mb-4 cursor'>Пользовательское соглашение</div>
                            <div className='col-sm-2 col-lg-2 col-xl-2 mt-4 mb-4 row'>
                                <div className='col-sm-6 col-lg-6 col-xl-6 ml-2 cursor'>
                                    <img src={vk} alt='vk'/></div>
                                <div className='col-sm-6 col-lg-6 col-xl-6 cursor'>
                                    <img src={inst} alt='inst'/></div>
                            </div>

                        </div>

                    </div>
                </div> : <div className={`${style.footerBottom} `}>
                    <div className='container '>
                        <div className='сol-12  pt-3'>
                            <div className='row d-flex justify-content-center '>
                                <div className='col-auto mt-2'>
                                    <img src={vk} alt='vk'/></div>
                                <div className=' col-auto mt-2'>
                                    <img src={inst} alt='inst'/></div>
                            </div>

                            <div className='text-center mt-2 pb-1 '>Политика конфиденциальности</div>
                            <div className='text-center pb-1'>Пользовательское соглашение</div>
                            <div className='text-center pb-3'>© 2021 Crocotari</div>

                        </div>

                    </div>
                </div>}
        </div>
    );
};

export default Footer;