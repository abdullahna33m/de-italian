import React from 'react'
import { Button, Card, IconButton } from '@mui/material';
import { useEffect,useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function CarDash({onsubtotal}) {


  function request(xi,y)
  {
    console.log(xi)
    console.log(y)



    
      const requestData = 
      {
        xi: xi,
        y: y
      };
      fetch('http://127.0.0.1:5000/api/update/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      })
      .then(response => {
        if (response.ok) {
          console.log('Data was successfully posted');
          setTimeout(() => {
          }, 1500);
        } else {
          console.error('Failed to post data');
        }
      })
      .catch(error => {
        console.error('Error occurred:', error);
      });
    };
    
  

    const [z, setZ] = useState([]);
    const [total,settotal] = useState(0)
    const [subtotal,setsubtotal] = useState(0)  
    const [x, setX] = useState([]);
    onsubtotal(subtotal,total);    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://127.0.0.1:5000/api/get/cart'); // Replace with your API endpoint
            if (!response.ok) {
              throw new Error('Request failed');
            }
            const jsonData = await response.json();
            
            // setData(jsonData);
            const updatedZ = [];
            let i = 0;
            let price = 0
            for (const key in jsonData) {
                if (jsonData.hasOwnProperty(key))
                  {
                    const item = jsonData[key];
                    price+=parseInt(item.price)*parseInt(item.Quantity)
                    const newItem = {
                        bid:key,
                        id: i,
                        name: item.food,
                        price: item.price * item.Quantity,
                        quantity: item.Quantity,
                        base:item.price,
                        img:item.img
                    };
                    i += 1;
                    updatedZ.push(newItem);               
                  }
                }
            settotal(price + 100);
            setsubtotal(price);
            onsubtotal(subtotal,total);       
            setZ(updatedZ);
            setX(z);
        } catch (error) {
            console.log(error);
          }
        };
      
        fetchData();
      }, []);
        useEffect(() => {
        setX(z);
      }, [z]);
    
    
      function handleAdd(id) {
        let temp;
        setX((prevX) => {
          const updatedX = prevX.map((item) => {
              if (item.id === id) {
                temp= parseInt(item.base)
                request("Add",item.bid)
              return {
                ...item,
                quantity: item.quantity + 1,
                price:parseInt(item.base)*parseInt(item.quantity+1)
              };
            }
            return item;
          });
          setsubtotal((subtotal+temp))
          settotal((total+temp))
          onsubtotal(subtotal,total)
    
          return updatedX;
        });
      }
    
      function handleRemove(id) {
        setX((prevX) => {
          let temp=0;
          const updatedX = prevX.map((item) => {
            if (item.id === id && item.quantity > 1) {
                temp= parseInt(item.base)
                request("subtract",item.bid)
              return {
                ...item,
                quantity: item.quantity - 1,
                price:item.base*(item.quantity-1)
              };
            }
            return item;
          });
          setsubtotal((subtotal-temp))
          settotal((total-temp))
          onsubtotal(subtotal,total)
          return updatedX;
        });
      }
    
      function removeItem(id) {
        setX((prevX) => {
          let item1 = prevX.filter(item => item.id === id);
          const updatedX = prevX.filter(item => item.id !== id);
          let temp =item1[0].base * item1[0].quantity;
          setsubtotal((subtotal-temp));
          settotal((total-temp));
          onsubtotal(subtotal,total);
          request("Remove",item1[0].bid);

          return updatedX;
        });
      }



    return (
        <>
        
        {x.map((item) => (
            <div className='grid grid-cols-5 md:mx-4 gap-x-6 items-center' key={item.id}>
              <div className='flex items-center justify-center'>
                <img src={require(`../public/${item.img}.png`)} 
                className='md:my-3 h-24 w-24' style={{ objectFit: 'contain' }} alt='Burger' />
              </div>
              <div >{item.name}</div>
              <div className='flex  items-center justify-center'>
                <IconButton color="inherit" onClick={() => handleRemove(item.id)}><RemoveIcon fontSize="small" /></IconButton>
                <h1>{item.quantity}</h1>
                <IconButton color="inherit" onClick={() => handleAdd(item.id)}><AddIcon fontSize="small" /></IconButton>
              </div>
              <div className='flex items-center justify-center'><h1>{item.price}</h1></div>
              <div className='flex items-center justify-center'><IconButton onClick={() => removeItem(item.id)} color="inherit"><ClearIcon fontSize="medium" /></IconButton></div>
            </div>
          ))}

        </>
    )
}

export default CarDash
