import React from 'react'
import map from '../../public/roadmap.png'

function HomeContactus() {

    
    return (
        <div  id = "deal" className='w-full p-4 text-wrap italic md:text-5xl text-2xl flex flex-wrap' style={{background:'#FEFBD9'}}>
            <h1 className='w-2/3'>De’Italian Affairs: A Culinary Journey to Fast Food Paradise Across Cities</h1>
            <img className="mx-auto h-1/2 my-auto " style= {{objectFit:'contain'}} src={map}></img>
        </div>
    )
}

export default HomeContactus
