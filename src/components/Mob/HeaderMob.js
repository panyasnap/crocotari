import React, {useContext} from 'react';
import logoMob from '../../img/Логотип (1).png';
import style from "../../style/mobil.module.css";
import shop from '../../img/Frame (5).png'
import Burger from "./Burger";
import {context} from "../../utils/context";

const HeaderMob = () => {
    const {openBurger, burgerMenu} = useContext(context);
    return (
        <div className={`headerMob ${openBurger ? 'unl' : null } intro`}>
            <div className='container '>
                <div className={`row ${style.headerBody}`}>
                    <div className='col-auto'><img src={shop} alt='shop'/></div>
                    <div className='col-auto'><img src={logoMob} alt='logo'/></div>

                    <div className={`headerBurger ${openBurger ? 'active ' : null}`} onClick={() => burgerMenu()}>
                        <span/>
                    </div>


                </div>
            </div>
            {openBurger ? <Burger open={openBurger} /> : null}
        </div>
    );
};

export default HeaderMob;