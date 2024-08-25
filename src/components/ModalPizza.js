import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import pizza from '../public/pitza.png'
import ClearIcon from '@mui/icons-material/Clear';
import {
  IconButton,
  Dialog,
} from '@mui/material';

const FormPizza = ({ open, onClose,size }) => {

  let sizes = size;

  function handleClick(i) 
  {
      const requestData = 
      {
        Pizza: i
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
          setTimeout(() => {
          }, 1500);
        } else {
          console.error('Failed to post data');
        }
      })
      .catch(error => {
        console.error('Error occurred:', error);
      });
      onClose()
    };


  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" 
    PaperProps={{
        style: { minHeight: '50%', minWidth: '65%' },
      }}       >
      <div className='flex justify-between py-8 px-12'>      
      <h1 className='flex items-center text-3xl'>Choose One</h1>
      <div className='flex items-center justify-center'><IconButton onClick={onClose} color="inherit"><ClearIcon fontSize="medium" /></IconButton></div>
        </div>


        {sizes.map((item) => (
        <div className='grid grid-cols-5 md:mx-4 gap-x-4 items-center text-xl font-poppins'>
              <div className='flex items-center justify-center'>
                <img src={pizza} 
                className='h-24 w-24' style={{ objectFit: 'contain' }} alt='Burger' />
              </div>
              <div >{item.name}</div>
              <div >{item.size}</div>
              <div className='flex items-center justify-center'><h1>{item.price}</h1></div>
              <div className='flex items-center justify-center'><IconButton  color="inherit" onClick={()=>handleClick(item.id)}> <ShoppingCartIcon fontSize="large"/></IconButton></div>
        </div>))}
    </Dialog>
  );
};

export default FormPizza;