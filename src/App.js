
import Header from "./components/Header";
import Main from "./components/Pagonation/Main";
import React, {useEffect, useState} from "react";
import {context} from './utils/context'
import Collection from "./components/Collection";
import ClubInvite from "./components/ClubInvite";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
import HeaderMob from "./components/Mob/HeaderMob";
import MainMob from "./components/Pagonation/MainMob";
import CollectionMob from "./components/Mob/CollectionMob";
import CarouselMain from "./components/CarouselMain";
import './App.css';
import CarouselMob from "./components/Mob/CarouselMob";


function App() {
    const [currentPage, setCurrentPage] = useState(1)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const [openBurger, setOpenBurger] = useState(false);

    const burgerMenu = () => setOpenBurger(!openBurger)
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
                currentPage, setCurrentPage, windowWidth, burgerMenu, openBurger
            }
        }>

            {windowWidth < 768 ?

                <div  >
                    <HeaderMob/>
                    {/*<MainMob/>*/}
                    <CarouselMob/>
                    <CollectionMob/>
                </div> :
                <div>
                    <Header/>
                    {/*<Main/>*/}
                    <CarouselMain/>
                    <Collection/>
                </div>
            }
            <ClubInvite/>
            <Instagram/>
            <Footer/>



        </context.Provider>

    );

    // return (
    //     <div>
    //
    //     </div>
    // )
}

export default App;
