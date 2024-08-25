import React, { useState } from 'react'
import Card from '@mui/material/Card';
import { Alert } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import fanta from "../../public/fanta.png"
import coke from "../../public/coca-cola.png"
import sprite from "../../public/sprite.png"
function DrinkSec()
{
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  function handleClick(i) 
  {
      const requestData = 
      {
        drink: i
      };
      fetch('http://127.0.0.1:5000/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      })
      .then(response => {
        if (response.ok) {
          console.log('Data was successfully posted');
          setIsAddedToCart(true)
          setTimeout(() => {
            setIsAddedToCart(false);
          }, 1500);
        } else {
          console.error('Failed to post data');
        }
      })
      .catch(error => {
        console.error('Error occurred:', error);
      });
      return <Alert severity="success">Added to Cart.</Alert>
    };
    

   let  x =  []; 
   let food = [{"name":"Coca Cola Regular","price":"199","location":coke},{"name":"Sprite Regular","price":"199","location":sprite},{"name":"Fanta Regular","price":"199","location":fanta}];
   for (let i = 0; i < 3;i++)
    {
        x.push(
        <Card className='text-2xl font-semibold flex flex-col justify-between'
            sx={{ maxWidth: 325, maxHeight: 650,height:340,width:350, backgroundColor: 'transparent' }}
        >

            <div className='mb-1'>
                <h1 className='text-center text-2xl pt-2 font-semibold'>{food[i].name}</h1>
            </div>
            <div className='h-1/2 flex justify-center  my-auto'>
                <img className='h-full w-full transition-transform transform-gpu hover:scale-125' src = {food[i].location} style={{objectFit:'contain'}}/>
            </div>
                <div className='flex justify-around my-auto'>
                    <div className='text-center pt-2'>Price</div>
                    <div className='text-center pt-2'>Rs.{food[i].price}</div>
                </div>
            <div className='flex justify-center '>
              <div className='bg-black rounded-full mb-3'>
                <IconButton color="inherit" onClick={()=>handleClick(i)}>
                    <ShoppingCartIcon style={{ color: '#FEFBD9' }}  fontSize="large"/>
                </IconButton>
              </div>
            </div>

        </Card>)
    }
    
    return (

        <>
        <h1 className='pt-24 text-5xl py-10 flex justify-center italic'>Soft Drinks</h1>        
        <div className='flex justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {x}
            </div>
            {isAddedToCart && <Alert severity="success" className='fixed h-15 bottom-28' >Added to Cart.</Alert>}
        </div>
        </>
    )
}

export default DrinkSec
