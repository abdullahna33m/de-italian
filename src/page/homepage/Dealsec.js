import React,{useState} from 'react'
import Card from '@mui/material/Card';
import deal1 from '../../public/pngwing.com.png';
import { Alert } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function DealSec() {

    const [isAddedToCart, setIsAddedToCart] = useState(false);
    function handleClick(i) 
    {
        console.log(i)
        const requestData = 
        {
          deal: i
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

    
    const deals = [];
    let price = [750,550,990]
    let item = [["Burger","Leg Piece","Fries","Drink"],["Burger","Drink","Fries"],["Burger x2","Drinks x2","Fries"]]

    for (let i = 0; i < 3; i++) {
        deals.push(
            <Card className='text-2xl font-semibold flex flex-col justify-between'
                sx={{ maxWidth: 325, maxHeight: 650,height:440,width:350, backgroundColor: 'transparent' }}
            >
    
                <div className='mb-1 flex justify-around'>
                    <h1 className='text-center text-2xl pt-2 font-semibold'>Deal {i + 1}</h1>
                    <div className='text-center pt-2'>{price[i]}</div>
                </div>
                <div className='h-1/2 flex justify-center  my-auto'>
                    <img className='h-full w-full transition-transform transform-gpu hover:scale-125' src = {deal1} style={{objectFit:'contain'}}/>
                </div>
                    <div className='flex justify-around my-auto'>
                    </div>

                <ul className='mx-10 mb-5 list-disc list-inside'>
                    {item[i].map(items=>(
                        <li>{items}</li>
                    ))}
                </ul>
                <div className='flex justify-center '>
                  <div className='bg-black rounded-full mb-3'>
                  <IconButton color="inherit" onClick={()=>handleClick(i)}>
                        <ShoppingCartIcon style={{ color: '#FEFBD9' }} fontSize="large"/>
                    </IconButton>
                  </div>
                </div>
    
            </Card>)
        }

    return (
        <div className='w-full  p-10 flex justify-evenly flex-wrap' style={{background:'#FEFBD9'}}>
        {deals}
        {isAddedToCart && <Alert severity="success" className='fixed h-15 bottom-28' >Added to Cart.</Alert>}
        </div>
    )
}

export default DealSec
