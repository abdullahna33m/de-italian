import { Button, Card,IconButton } from '@mui/material';
import React, {useState } from 'react';
import CartDash from '../../components/CartDash'
import FormModal from '../../components/FormModal'
import { useNavigate } from 'react-router-dom';
function CartMain() {

    const [subtotal, setsubtotal] = useState(100);
    const [total, settotal] = useState(100);

    const handleChildAction = (newValue,newvalue2) => {
      setsubtotal(newValue);
      settotal(newvalue2);
      

      
    };
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
      setModalOpen(true);
    };

    const navigate = useNavigate();
    function Handlesbmit()
      {
        setModalOpen(false);
        navigate("/")
      }
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };

  return (
    <div className='flex justify-center py-10'>
      <Card className='flex flex-wrap m-10' sx={{ maxWidth: 1300, maxHeight: 850, height: 640, width: 1150, backgroundColor: "transparent" }}>
        <div className='md:h-full h-3/5 md:w-2/3 w-full bg-white overflow-auto'>
          <h1 className='text-4xl m-10 font-semibold'> Cart</h1>
          <CartDash onsubtotal={handleChildAction}/>
        </div>
        <div className='md:h-full h-2/5 md:w-1/3 w-full  flex flex-col justify-evenly md:p-10 p-5'>
          <h1 className='text-4xl text-center font-semibold'> Summary </h1>
          <div className='grid grid-cols-2  md:gap-14 my-2 gap-4 text-xl font-semibold'>
            <h1> Subtotal </h1>
            <h1 className='text-right'> {subtotal} </h1>
            <h1> Shipping </h1>
            <h1 className='text-right'> 100 </h1>
            <h1 className='font-semibold text-3xl'> Total </h1>
            <h1 className='text-right font-semibold text-3xl'> {total}</h1>
          </div>
          <Button onClick={handleOpenModal} variant='contained' style={{ backgroundColor: '#fcbf49', color: 'white', borderRadius: '10px' }}>Order Now</Button>
          <FormModal open={modalOpen} onClose={handleCloseModal} onSubmit = {Handlesbmit} />
        </div>
      </Card>
    </div>
  );
}

export default CartMain;