import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material'
import { Fade} from "react-awesome-reveal";
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Model } from '../../scene';

function HomeDash() {

  const navigate = useNavigate();


    const getInitialVariableValue = () => {
        return window.innerWidth >= 768 ? '70vh' : '58vh';
      };
    
      const [variable, setVariable] = useState(getInitialVariableValue());
    
      useEffect(() => {
        const handleResize = () => {
          const newVariableValue = window.innerWidth >= 768 ? '70vh' : '60vh';
          setVariable(newVariableValue);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      console.log(variable);

    
    // console.log(model);
// style={{background:'linear-gradient(81deg, #000 38.83%, #333 76.43%, #666 115.74%)'}}
    return (
        <div className='md:flex text-white md:py-22 justify-around' style={{background:'linear-gradient(81deg, #000 38.83%, #333 76.43%, #666 115.74%)'}}>
             <Fade direction="right md:w-1/2" triggerOnce={true} duration={3000}>
            <Canvas gl={{alpha: true}}  flat linear style={{background:"transparent", height:"100vh", width:variable}} className='w-1/2' >
                <PerspectiveCamera makeDefault fov={45} near={1} far={1000} position={[3,0,8]}/>
                <OrbitControls camera={null} autoRotate={false} enablePan={true} enableZoom={false}/>
                <Float speed={5} floatIntensity={6}>
                <Model  scale={0.13} rotation={[Math.PI / 14, 0 , Math.PI / 13]} position={[0,0 ,0]}/>
                </Float>
                <ambientLight intensity={4}/>
                <directionalLight intensity={2}/>

            </Canvas> 
             </Fade>
            <div className='md:w-1/2 md:pt-48 md:pb-50 pb-20 mx-4 text-wrap md:items-start items-center  flex justify-center flex-col '>
                <h1 className=' md:text-7xl text-3xl italic md:my-5 font-satisfy'>Dine Inn & Take Away</h1>
                <p className='my-7 lg:text-xl text-sm leading-relaxed'>
                Embark on a culinary journey at DeItalian, where flavor and finesse unite. Explore our curated menu, crafted to tantalize your taste buds. Order online for doorstep delivery of our finest creations.
                Embark on a culinary journey at DeItalian, where flavor and finesse unite. Explore our curated menu, crafted to tantalize your taste buds. Order online for doorstep delivery of our finest creations.
                Embark on a culinary journey at DeItalian, where flavor and finesse unite. Explore our curated menu.
                
                </p>
                <Button onClick = {()=> {navigate("/menu");}}variant='contained' className='' style={{backgroundColor:  '#fcbf49',color: 'white',borderRadius: '20px'}}>Order Now</Button>
            </div>
        </div>
    )
}

export default HomeDash
