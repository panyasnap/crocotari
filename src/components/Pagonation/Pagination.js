import React, {useContext} from 'react';
import {context} from "../../utils/context";
import {images} from "../../utils/utils";
import left from "../../img/Component 2.png";
import right from "../../img/Component 1.png";
import style from '../../style/main.module.css';
import arrow from '../../img/Frame (2).png'



function Pagination({data, RenderComponent, pageLimit, dataLimit}) {
    const {currentPage, setCurrentPage} = useContext(context);

    function goToNextPage() {
        setCurrentPage((page) => page < 3 ? page + 1 : data.length);
        // setCurrentPage((page) => page + 1);

    }

    function goToPreviousPage() {
        //setCurrentPage((page) => page - 1);
        setCurrentPage((page) => page > 1 ? page - 1: pageLimit);
    }

    // The changePage function will be called
    // when the user clicks on any page number and
    // it will change the current page to the page
    // number that was clicked by the user
    // function changePage(event) {
    //     const pageNumber = Number(event.target.textContent);
    //     setCurrentPage(pageNumber);
    //
    // }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex)



    };

   //  const getPaginationGroup = () => {
   //      let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
   //      return new Array(pageLimit).fill().map((data, key) => start + key + 1);
   // };

    return (
        <div>
            <div>
                {getPaginatedData().map((data, index) => (
                    <RenderComponent
                        key={index}
                        data={data}
                         img={images}
                    />
                ))}
            </div>

            <div className='d-flex jumbotron-fluid mb-5 mt-5'>
                <div className=' container '>
                    <div className='row justify-content-between'>
                    {/* previous button */}
                        <div className='row col-3'>
                    {data.length > dataLimit ?
                        <div onClick={goToPreviousPage}  className={`col-6 ${style.pagination} ${currentPage ===  1  ? 'active' : ''}`}><img className={`${style.pagination}`} src={left} alt='left'/></div>
                        : <></>}

                    {/* next button */}
                    {data.length > dataLimit ?
                        <div onClick={goToNextPage} className={`col-6  ${currentPage >= pageLimit ? 'disabled' : ''}`}> <img className={`${style.pagination}`} src={right} alt='right'/></div>
                        : <></>}

                    </div>
                <button className={`${style.catalogBtn} col-3 mb-5`}>В КАТАЛОГ <img src={arrow} alt='arrow'/> </button></div>
                </div>
            </div>
        </div>);
}

export default Pagination;