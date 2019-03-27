import React from 'react'
import './ads.css'
import ads from '../../images/advert.png'


const Ads = () => {

    return (
        <>
            <div className='ad-background'>
                <img className='ad' src={ads}/>
            </div>
            <div className='gradient'/>
        </>
    )
}

export default Ads
