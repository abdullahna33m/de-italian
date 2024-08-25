import React from 'react'
import HomeDash from './homepage/Homedash';
import DealSec from './homepage/Dealsec';
import HomeContactus from './homepage/Home3';
import Contactus from './homepage/Contactus';

function Home() {
    return (
        <div className='page transition-opacity duration-300'>
            <HomeDash></HomeDash>
            <h1  className='w-full pt-10 italic md:text-6xl text-3xl flex justify-evenly flex-wrap' style={{background:'#FEFBD9'}}>Top Picked Deals</h1>
            <DealSec></DealSec>
            <HomeContactus></HomeContactus>
            <Contactus/>
        </div>
    )
}

export default Home
