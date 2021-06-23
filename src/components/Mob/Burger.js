import React, {useContext} from 'react';
import style from '../../style/burger.module.css'
import {context} from "../../utils/context";

const Burger = (props) => {
    const {openBurger} = useContext(context);
    return (

        <div >
            <div className={`burger ${openBurger? 'is-nav-open' : null}`} >
                <nav className={`${style.headerMenu}  pt-4`}>
                    <div > <a>Женщинам</a></div>
                    <div> <a>Мужчинам</a></div>
                    <div> <a>Контакты</a></div>
                </nav>
            </div>


        </div>

    );
};

export default Burger;