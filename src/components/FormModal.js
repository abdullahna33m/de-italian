import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

const FormModal = ({ open, onClose,onSubmit}) => {





  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');

  var isFormFilled = name !== '' && email !== '' && number !== '' && address !== '';

  const handleNameChange = (event) => {
    setName(event.target.value);
    isFormFilled = name !== '' && email !== '' && number !== '' && address !== '';
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    isFormFilled = name !== '' && email !== '' && number !== '' && address !== '';
  };

  const handlenumberChange = (event) => {
    setNumber(event.target.value);
    isFormFilled = name !== '' && email !== '' && number !== '' && address !== '';
  };

  const handleaddressChange = (event) => {
    setAddress(event.target.value);
    isFormFilled = name !== '' && email !== '' && number !== '' && address !== '';
  };
  const handlecommentChange = (event) => {
    setComment(event.target.value);
    isFormFilled = name !== '' && email !== '' && number !== '' && address !== '';
  };


  function handleClick(i) 
  {
      const requestData = 
      {
        name:name,
        email:email,
        address,address,
        number:number,
        comment,comment
      };
      fetch('http://127.0.0.1:5000/api/get/details', {
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
      // onClose()
      onSubmit()
    };
    
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title"     PaperProps={{
        style: { minHeight: '65%', minWidth: '65%' },
      }}         InputProps={{
        className: 'h-1/2',
      }}>
      <DialogTitle sx={{ my: '20px' , fontWeight:"bold", fontSize:"30px"}}  id="form-dialog-title">Address</DialogTitle>
      <DialogContent>
        <div className='flex justify-around grid-cols-2 gap-7'>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            required
            type="text"
            fullWidth
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            margin="dense"
            label="Email Address"
            type="email"
            required
            fullWidth
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className='flex justify-around grid-cols-2 gap-7'>
          <TextField
            autoFocus
            margin="dense"
            label="number"
            required
            type="number"
            fullWidth
            value={number}
            onChange={handlenumberChange}
          />
          <TextField
            margin="dense"
            required
            label="Address"
            type="text"
            fullWidth
            value={address}
            onChange={handleaddressChange}
          />
        </div>
        <div className='flex justify-around grid-cols-2 gap-7'>
          <TextField
            autoFocus
            margin="dense"
            label="Comment"
            multiline
            rows={4}
            type="text"
            fullWidth
            value={comment}
            onChange={handlecommentChange}
            // InputProps={{
            // className: 'h-28'
            //   }}

          />

        </div>
      </DialogContent>
      <DialogActions className='mx-auto my-10'>
        <Button  onClick={onClose} variant='contained' style={{ backgroundColor: '#fcbf49', color: 'white', borderRadius: '10px' }}>
          Cancel
        </Button>
        <Button  disabled={!isFormFilled} onClick={()=> handleClick(0)}variant='contained' style={{ backgroundColor: '#fcbf49', color: 'white', borderRadius: '10px' }}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormModal;