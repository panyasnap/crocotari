import React from 'react';
import Pagination from "./Pagination";
import {img} from "../utils/utils";
import ImagePage from "./ImagePage";


const Main = () => {
    return (
        <div className='m-0'>
            {/*<ImagePage/>*/}
            <Pagination
                data={img}
                RenderComponent={ImagePage}
                pageLimit={Math.round(img.length / 3)}
                dataLimit={1}
            />
        </div>
    )
    // return (
    //     <div className=' col-sm-12 col-md-12 col-lg-12 jumbotron-fluid'>
    //         {/*<img className={`${style.mainImg} w-100`} src={main} alt='main'/>*/}
    //         <div className={`${style.mainImg} w-100`} > </div>
    //         <h1 className={`${style.h1Text}`}>Преимущество магазина</h1>
    //         <div className='container'>
    //             <div className='row justify-content-between mt-5 '>
    //                 <div className='col-3 row ml-1'>
    //                     <Pagination
    //                         data={img}
    //                         RenderComponent={ImagePage}
    //                         pageLimit={Math.round(img.length / 3 )}
    //                         dataLimit={1}
    //                     />
    //
    //                     {/*<div className='col-6'><img src={left} alt='left'/></div>*/}
    //                     {/*<div className='col-6'><img src={right} alt='right'/></div>*/}
    //                 </div>
    //                 <button className={`${style.catalogBtn} col-2`}>В КАТАЛОГ <GrLinkNext/></button>
    //             </div>
    //         </div>
    //
    //
    //     </div>
    //
    // );


};

export default Main;