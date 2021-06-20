import React from 'react';
import style from "../../style/mobil.module.css";
import left from "../../img/Component 2.png";
import right from "../../img/Component 1.png";

const ImagePageMob = (props) => {
    return (
        <div>
            <div className='position-relative ' >
            <img className='w-100 ' src={props.data} alt='bag'/>

            <div className={`${style.arrow}`}>
                {/* previous button */}
                {/*<div className='row'>*/}
                    {props.data.length > props.dataLimit ?
                        <div onClick={props.goToPreviousPage}
                             className={`col-auto  ${style.pagination} ${props.currentPage === 1 ? 'active' : ''}`}>
                            <img
                               src={left} alt='left'/></div>
                        : <></>}

                    {/* next button */}
                    {props.data.length > props.dataLimit ?
                        <div onClick={props.goToNextPage}
                             className={` col-auto ${style.pagination}  ${props.currentPage >= props.pageLimit ? 'disabled' : ''}`}>
                            <img
                                src={right} alt='right'/></div>
                        : <></>}

                {/*</div>*/}
            </div>
            </div>

        </div>
    );
};

export default ImagePageMob;