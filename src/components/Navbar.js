import {Button} from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { useNavigate } from 'react-router-dom';
import 'typeface-satisfy';

function Navbar() {

    const navigate = useNavigate();
    const scrollToSection = (sectionId) => {
        navigate("/");
      
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500); // Adjust the delay value as needed
      };
    return (
        <div className='flex justify-around w-full md:py-5 text-white text-3xl md:text-lg font-bold' style={{background:"linear-gradient(81deg, #000 38.83%, #333 76.43%, #666 115.74%)"}}>
            <h1 className='italic my-auto size-10 text-2xl lg:text-4xl'>DeItalian</h1>

            <div className='md:flex md:visible  hidden justify-evenly text-white md:w-3/5' style={{backgroundColor:"linear-gradient(81deg, #000 38.83%, #333 76.43%, #666 115.74%)"}}>
                <Button  style={{ fontSize: '1.2rem' ,fontWeight:'bold' }} component={Link} to="/" variant='text' color='inherit'>Home</Button>
                <Button  style={{ fontSize: '1.2rem' ,fontWeight:'bold' }} component={Link} to="/menu" variant='text' color='inherit'>Menu</Button>
                <Button  style={{ fontSize: '1.2rem' ,fontWeight:'bold' }} onClick={() => scrollToSection('Contact us')} variant='text' color='inherit'>Contact us</Button>
                <Button  style={{ fontSize: '1.2rem' ,fontWeight:'bold' }} onClick={() => scrollToSection('deal')}  variant='text' color='inherit'>About us</Button>
    </div>
            <div className='flex justify-evenly align-middle'>
                <div className='md:hidden'><IconButton  component={Link} to="/" color='inherit'><HomeIcon fontSize='large'></HomeIcon></IconButton> </div>   
                <div className='md:hidden'><IconButton  component={Link} to="/menu" color='inherit'><RestaurantMenuIcon fontSize='large'></RestaurantMenuIcon></IconButton> </div>  
                <IconButton color='inherit'><LoginIcon fontSize='large'></LoginIcon></IconButton>     
                <IconButton component={Link} to="/cart" color='inherit'><ShoppingCartIcon fontSize='large'></ShoppingCartIcon></IconButton>   
            </div>
        </div>
    )
}

export default Navbar
