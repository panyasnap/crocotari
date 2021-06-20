import React, {useContext} from 'react';
import {imgMob} from "../../utils/utils";
import style from '../../style/mobil.module.css';
import arrow from '../../img/Frame (2).png'
import {context} from "../../utils/context";


function Pagination({data, RenderComponent, pageLimit, dataLimit}) {
    const {currentPage, setCurrentPage} = useContext(context);

    function goToNextPage() {

        setCurrentPage((page) => page < 3 ? page + 1 : data.length);
        // setCurrentPage((page) => page + 1);

    }

    function goToPreviousPage() {

        // setCurrentPage((page) => page - 1);
        setCurrentPage((page) => page > 1 ? page - 1 : pageLimit);

    }


    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex)


    };


    return (
        <div>
            <div>
                {getPaginatedData().map((data, index) => (
                    <RenderComponent
                        key={index}
                        data={data}
                        img={imgMob}
                        goToPreviousPage={goToPreviousPage}
                        goToNextPage={goToNextPage}
                        pageLimit={pageLimit}
                        dataLimit={dataLimit}
                        currentPage={currentPage}
                    />
                ))}
            </div>
            <div className='container mt-3 '>
                <div className='d-flex justify-content-center align-self-center pb-5'>
                    <button className={`${style.catalogMobBtn}  `}>В
                        КАТАЛОГ <img src={arrow} alt='arrow'/></button>
                </div>

            </div>

        </div>);
}

export default Pagination;