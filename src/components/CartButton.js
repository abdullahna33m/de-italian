import React from 'react'
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartButton() {
    return (
        <div>
       <IconButton    
        color='inherit'
        style={{
            position: 'fixed',
            bottom: '0',
            right: '0',
            backgroundColor: '#fcbf49',
            borderRadius: '50%',
            margin: '4rem',
        }}
        ><ShoppingCartIcon fontSize='large'></ShoppingCartIcon></IconButton>
        </div>
    )
}

export default CartButton
