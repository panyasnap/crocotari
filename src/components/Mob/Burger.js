import React, {useContext} from 'react';
import {context} from "../../utils/context";

const Burger = () => {
    const {openBurger} = useContext(context);
    return (

        <div>
            <nav className={`headerMenu ${openBurger ? 'is-nav-open' : null} pt-3`}>
                <div><a>Женщинам</a></div>
                <div><a>Мужчинам</a></div>
                <div><a>Контакты</a></div>
            </nav>
        </div>

    );
};

export default Burger;