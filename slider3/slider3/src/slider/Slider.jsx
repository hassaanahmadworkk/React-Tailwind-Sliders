import React, { useState } from 'react';
import sliderData from './SliderData';
import SliderCard from './SliderCard';
const Slider = () => {
const [counter,setCounter]=useState(0);
const slidesLenght=sliderData.length;
const goNext=()=>{
  setCounter((prevCounter)=>(prevCounter+1)%slidesLenght);
}
const goPrev=()=>{
  setCounter((prevCounter)=>(prevCounter-1+slidesLenght)%slidesLenght)
 
}
  
  return (
    <div className='grid auto-cols-[100vw] grid-flow-col overflow-x-hidden' >
       <button className="absolute z-10 top-1/2" onClick={goPrev} >
          <span className="material-symbols-outlined bg-yellow-300 ">
            chevron_left
          </span>
        </button>
     

        {sliderData.map((pkg,index) => (
          <SliderCard key={pkg.id} counter={counter} index={index} {...pkg} />
          ))}
         
          
          <button className="absolute z-10 top-1/2 right-0" onClick={goNext}>
          <span className="material-symbols-outlined bg-yellow-300 ">
            chevron_right
          </span>
        </button>
      </div>
  
  );
};

export default Slider;
