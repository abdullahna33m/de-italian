import React, { useState } from 'react';
import phone from '../../public/CellPhone.png'

import {
    Button,
    TextField,
  } from '@mui/material';


function Contactus() {


  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  var isFormFilled = name !== '' && email !== '' &&  comment !== '';

  const handleNameChange = (event) => {
    setName(event.target.value);
    isFormFilled = name !== '' && email !== '' &&  comment !== '';
  };
  const handleCommentChange = (event) => {
    setComment(event.target.value);
    isFormFilled = name !== '' && email !== '' &&  comment !== '';
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    isFormFilled = name !== '' && email !== '' &&  comment !== '';
  };

  function handleClick(i) 
  {
      const requestData = 
      {
        name:name,
        email:email,
        comment:comment
      };
      fetch('http://127.0.0.1:5000/api/post/comments', {
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
      setName("")
      setComment("")
      setEmail("")
    };
    
    return (
        <div  id = "Contact us" className='md:px-12 w-full p-4 text-wrap italic md:text-5xl text-2xl flex flex-wrap' style={{background:'#FEFBD9'}}>
            <h1 className='w-2/3'>Contact Us</h1>

        <div className='display flex '>

        <div>
            <TextField
            style = {{background:'white'}}
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            style = {{background:'white'}}
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={handleEmailChange}
          />

          <TextField
            style = {{background:'white'}}
            margin="dense"
            label="Comment"
            // sx = {{input:{color:"white"}}}
            type="text"
            multiline
            color='primary'
            rows={4}
            fullWidth
            
            value={comment}
            onChange={handleCommentChange}
            />
             <Button variant='contained' onClick={handleClick}
             disabled = {!isFormFilled} 
             className='w-full' style={{backgroundColor:  '#fcbf49',color: 'white',borderRadius: '15px'}}>Send Message</Button>
            </div>


        <img src = {phone} className='w-1/2 md:flex mr-44 hidden'></img>
        </div>
        </div>
    )
}

export default Contactus
