import React from 'react';
import style from '../../style/collecton.module.css'
import man from "../../img/1 (81) 1.png";
import frame from "../../img/Frame (3).png";
import woman from "../../img/1 (6) 1.png";

const CollectionMob = () => {
    return (
        <div className={`${style.blockMobil} `}>
            <div className='container pt-3 pb-5'>

                <p className='mt-4 '>Мужская коллекция</p>
                <img className={` col-12 `} src={man} alt='man'/>
                <div className='d-flex justify-content-end'>
                    <button
                        className={`${style.mobilBtn} `}>В КАТАЛОГ <img src={frame} alt='frame'/>
                    </button>
                </div>
                <p className='mt-2 '>Женская коллекция</p>
                <img className='col-12 ' src={woman} alt='woman'/>
                <div className='d-flex justify-content-end'>
                    <button
                        className={`${style.mobilBtn} `}>В КАТАЛОГ <img src={frame} alt='frame'/>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default CollectionMob;