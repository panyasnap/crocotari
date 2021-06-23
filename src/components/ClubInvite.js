import React from 'react';
import style from '../style/club.module.css'

const ClubInvite = () => {
    return (
        <div className={`${style.backgroundClub}  justify-content-center d-flex `}>
            <div className='container d-flex justify-content-center align-self-center'>
                <div className={`${style.blockClub} row justify-content-center align-self-center `}>
                    <div className='row d-flex justify-content-center align-self-center'>
                        <h2 className={`${style.textH2} text-center w-100`}>Станьте членом клуба CROCOTARI</h2>
                        <div>
                        <button className={`${style.moreBtn} mt-5`}>ПОДРОБНЕЕ</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClubInvite;