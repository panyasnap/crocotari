import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import React, {useEffect, useState} from "react";
import {context} from './utils/context'
import Collection from "./components/Collection";
import ClubInvite from "./components/ClubInvite";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
import HeaderMob from "./components/Mob/HeaderMob";
import MainMob from "./components/Mob/MainMob";
import CollectionMob from "./components/Mob/CollectionMob";


function App() {
    const [currentPage, setCurrentPage] = useState(1)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)


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
                currentPage, setCurrentPage, windowWidth
            }
        }>
            {windowWidth < 768 ?
                <div>
                    <HeaderMob/>
                    <MainMob/>
                    <CollectionMob/>
                </div> :
                <div>
                    <Header/>
                    <Main/>
                    <Collection/></div>
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
