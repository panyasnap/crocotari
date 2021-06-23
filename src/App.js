import Header from "./components/Header";
import React, {useEffect, useState} from "react";
import {context} from './utils/context'
import Collection from "./components/Collection";
import ClubInvite from "./components/ClubInvite";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
import HeaderMob from "./components/Mob/HeaderMob";
import CollectionMob from "./components/Mob/CollectionMob";
import CarouselMain from "./components/CarouselMain";
import './App.css';
import CarouselMob from "./components/Mob/CarouselMob";


function App() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const [openBurger, setOpenBurger] = useState(false);

    const burgerMenu = () => {
        openBurger ? closeBurgerMenu() : openBurgerMenu()
    }
    const closeBurgerMenu = () => {
        setOpenBurger(false)
        if (document.body.style.overflow === "hidden") {
            document.body.style.overflow = "auto"
        }
    }
    const openBurgerMenu = () => {
        setOpenBurger(true)
        if (document.body.style.overflow !== "hidden") {
            document.body.style.overflow = "hidden";
        }
    }
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return (
        <context.Provider value={
            {
                windowWidth, burgerMenu, openBurger
            }
        }>
            {windowWidth < 768 ?
                <div>
                    <HeaderMob/>

                    <CarouselMob/>
                    <CollectionMob/>
                </div> :
                <div>
                    <Header/>

                    <CarouselMain/>
                    <Collection/>
                </div>
            }
            <ClubInvite/>
            <Instagram/>
            <Footer/>
        </context.Provider>

    );
}

export default App;
