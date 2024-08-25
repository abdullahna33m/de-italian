import React from 'react'
import Card from '@mui/material/Card';
import location from '.././resources/mdilocation.svg'
import phone from '.././resources/solarphonebold.svg'
import email from '.././resources/dashiconsemail.svg'
function Footer() {
    return (
        <div className=' text-white w-full font-poppins text-3xl' style={{background:'linear-gradient(180deg, #727272 -29.15%, #353535 34.66%, #111 85.14%)'}}> 
            <h1 className='md:text-6xl text-3xl italic py-5 border-l-white flex justify-center'>GET IN TOUCH</h1>
            <div className='flex justify-evenly flex-wrap'>
            <Card className='flex items-center flex-col'
                sx={{margin:"3rem" ,maxWidth: 220, maxHeight: 300, backgroundColor: 'transparent' ,color:"white"}}>
                  <div className='flex justify-center w-24 h-24 bg-white rounded-full'>
                    <img src = {email}/>
                  </div>
                  <h1 className='text-wrap text-3xl bold  my-4'>Email</h1>
                  <p className='text-base'>Adeitalian@gmail.com</p>
                  <p className='text-center text-base'> orderitalian11@gmail.com</p>
                </Card>

                <Card className='flex items-center flex-col'
                sx={{margin:"3rem" ,maxWidth: 220, maxHeight: 300, backgroundColor: 'transparent' ,color:"white"}}>
                  <div className='flex justify-center w-24 h-24 bg-white rounded-full'>
                    <img src = {phone}/>
                  </div>
                  <h1 className='text-wrap text-3xl bold my-4'>PhoneNo</h1>
                  <p className='text-base'>051-2761649</p>
                  <p className='text-center text-base'>+92337-5106310</p>
                </Card>


                <Card className='flex items-center flex-col'
                sx={{margin:"3rem" ,maxWidth: 220, maxHeight: 300, backgroundColor: 'transparent' ,color:"white"}}>
                  <div className='flex justify-center w-24 h-24 bg-white rounded-full'>
                    <img src = {location}/>
                  </div>
                  <h1 className='text-wrap text-3xl bold  my-4'>Address</h1>
                  <p className='text-center text-base'>Al Rehmat Mall, Shop No 03</p>
                  <p className='text-center text-base'> G11 Markaz, Near</p>
                  <p className='text-center text-base'> Tehzeeb Bakers, Islamabad</p>
                </Card>
            </div>
            <h4 className='my-10 text-xl flex justify-center text-center'> Copyright © 2023-2024 DeItalian Affairs. All rights reserved.</h4>
        </div>
    )
}

export default Footer
