import React,{ useState } from 'react'
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import rtimg from '../../public/ranch-tikka.png'
import fffimg from '../../public/florida-feast-fajita.png'
import cpimg from '../../public/chicken-pepperoni.png'
import ctimg from '../../public/creamy-tikka.png'
import gcimg from '../../public/grilled-chicken.png'
import cwbimg from '../../public/chicken-wing-bite.png'
import FormPizza from '../../components/ModalPizza';

function Pizzasec() {

    const [modalOpen, setModalOpen] = useState(false);

    const [index, setindex] = useState(0);

    const handleOpenModal = (i) => {
        setindex(i);
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
        console.log("false");
      setModalOpen(false);
    };
    
    let  x =  []; 

   let  sizes = [[{"id":"P2","name":"Ranch Tikka","size":"Medium","price":1200},{"id":"P3","name":"Ranch Tikka","size":"Large","price":1890}],[{"id":"P4","name":"Florida Feast","size":"Small","price":550},{"id":"P5","name":"Florida Feast","size":"Medium","price":1200},{"id":"P6","name":"Florida Feast","size":"Large","price":1890}],[{"id":"P7","name":"Chicken Peporoni","size":"Small","price":600},{"id":"P8","name":"Chicken Peporoni","size":"Medium","price":1200},{"id":"P9","name":"Chicken Peporoni","size":"Large","price":2000}],
   [{"id":"P10","name":"Creamy tikka","size":"Small","price":550},{"id":"P11","name":"Creamy tikka","size":"Medium","price":1200},{"id":"P12","name":"Creamy tikka","size":"Large","price":1890}],[{"id":"P13","name":"Grilled Chicken Pizza","size":"Small","price":550},{"id":"P14","name":"Grilled Chicken Pizza","size":"Medium","price":1290},{"id":"P15","name":"Grilled Chicken Pizza","size":"Large","price":1800}],[{"id":"P16","name":"Chicken Wing Bite","size":"Small","price":620},{"id":"P17","name":"Chicken Wing Bite","size":"Medium","price":1250},{"id":"P18","name":"Chicken Wing Bite","size":"Large","price":1950}]]

    let food = [{"name":"Ranch Tikka","price":"1200","location":rtimg},{"name":"Florida Feast Fajita","price":"550","location":fffimg},{"name":"Chicken Peporoni","price":"550","location":cpimg},{"name":"Creamy tikka","price":"600","location":ctimg},{"name":"Grilled Chicken Pizza","price":"550","location":gcimg},{"name":"Chicken Wing Bite","price":"620","location":cwbimg}];
    for (let i = 0; i < 6;i++)
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
                    <div className='flex justify-center my-auto'>
                        <div className='text-center px-2 pt-2'>Starting From Price</div>
                        <div className='text-center pt-2'>Rs.{food[i].price}</div>
                    </div>
                <div className='flex justify-center '>
                  <div className='bg-black rounded-full mb-3'>
                    <IconButton color="inherit" onClick={()=>handleOpenModal(i)}>
                        <ShoppingCartIcon style={{ color: '#FEFBD9' }}  fontSize="large"/>

                    </IconButton>
                  </div>
                </div>
    
            </Card>)
     }
     return (
 
         <>
         <h1 className='text-5xl py-10 flex justify-center italic'>Pizza</h1>        
         <div className='flex justify-center'>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
             {x}
             <FormPizza open={modalOpen} onClose={handleCloseModal} size={sizes[index]} />
             </div>
         </div>
         </>
     )
 }

export default Pizzasec
