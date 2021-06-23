import React from 'react';
import woman from '../img/1 (6) 1.png';
import man from '../img/1 (81) 1.png'
import style from "../style/collecton.module.css";
import frame from '../img/Frame (3).png'

const Collection = () => {
    return (
        <div className='jumbotron-fluid mt-5 mb-5'>

            <div className='container'>
                <h2 className='mt-5 mb-5'>Коллекции</h2>
                <div className={`${style.imgBlock} row mt-5 `}>
                    <div className={`${style.imgPositionMan} pr-2`}>

                            <img className=' w-100' src={man} alt='man'/>
                            <div className={`${style.blockMan} `}>
                                <h3 className='text-center '>Мужская коллекция <button
                                    className={`${style.catalogBtn} mt-5`}>В КАТАЛОГ <img src={frame} alt='frame'/>
                                </button></h3>
                            </div>

                    </div>

                    <div className={`${style.imgPositionWomen} pl-2 `}>

                            <img className=' w-100' src={woman} alt='woman'/>
                            <div className={`${style.blockWoman}`}>
                                <h3 className={` text-center `}>Женская коллекция
                                    <button className={`${style.catalogBtn} mt-5 `}>В КАТАЛОГ <img src={frame}
                                                                                                   alt='frame'/>
                                    </button></h3>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;