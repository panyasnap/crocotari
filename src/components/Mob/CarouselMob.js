import React from 'react';
import imgMob1 from '../../img/1 (1) 2.png';
import imgMob2 from '../../img/1 (16) 2.png';
import imgMob3 from '../../img/1 (49) 4.png'
import {Carousel, CarouselItem} from "react-bootstrap";
import style from '../../style/mobil.module.css'


const CarouselMob = () => {
    return (
        <div className={`carouselMob`}>
            <Carousel  interval={null}>

                <CarouselItem ><img className='d-block w-100' src={imgMob1} alt='bag'/></CarouselItem>

                <CarouselItem><img className='d-block w-100' src={imgMob2} alt='bag'/></CarouselItem>

                <CarouselItem><img className='d-block w-100' src={imgMob3} alt='bag'/></CarouselItem>

            </Carousel>
        </div>
    );
};

export default CarouselMob;