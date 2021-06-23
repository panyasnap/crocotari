import React from 'react';
import img1 from '../img/1 (1) 1.png';
import img2 from '../img/1 (16) 1.png';
import img3 from '../img/1 (49) 3.png';

import style from '../style/main.module.css';
import {Carousel, CarouselItem} from "react-bootstrap";
import arrow from "../img/Frame (2).png";


const CarouselMain = () => {

    return (
        <div>
            <div className='carouselStyle '>
                <Carousel interval={null}>

                    <CarouselItem><img className='d-block w-100' src={img1} alt='bag'/>
                        <Carousel.Caption>
                            <h2>Преимущество
                                магазина</h2>
                        </Carousel.Caption>
                    </CarouselItem>


                    <CarouselItem><img className='d-block w-100' src={img2} alt='bag'/>
                        <Carousel.Caption>
                            <h2>Преимущество
                                магазина</h2>
                        </Carousel.Caption>
                    </CarouselItem>


                    <CarouselItem><img className='d-block w-100' src={img3} alt='bag'/>
                        <Carousel.Caption>
                            <h2>Преимущество
                                магазина</h2>
                        </Carousel.Caption>
                    </CarouselItem>

                </Carousel>

            </div>
            <button className={`${style.catalogBtn} col-3 mb-5`}>В КАТАЛОГ <img src={arrow} alt='arrow'/></button>
        </div>
    );
};

export default CarouselMain;