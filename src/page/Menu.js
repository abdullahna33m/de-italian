import React from 'react'
import BurgerSec from './menupage/BurgerSec'
import Pizzasec from './menupage/PizzaSec'
import PastaSec from './menupage/PastaSec'
import FriesSec from './menupage/FriesSec'
import SteakSec from './menupage/SteakSec'
import DrinkSec from './menupage/DrinkSec'

function componentName() {
    return (
        <div className='h-full py-10' style={{background: '#FEFBD9'}}>
         <BurgerSec/> 
         <Pizzasec/> 
         <PastaSec/>
         <FriesSec/>
         <SteakSec/>
         <DrinkSec/>

        </div>
    )
}

export default componentName
