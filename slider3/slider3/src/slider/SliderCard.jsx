import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';

export default function SliderCard({ counter, index, img, title, Desc }) {
  // const slides = document.querySelectorAll('.slider');

  // useEffect(() => {
  //   slides.forEach((slide, index) => {
  //     slide.style.left = `${index * 100}%`;
  //   });
  // }, []);

  // const slideImage = () => {
  //   slides.forEach((slide) => {
  //     slide.style.transform = `translateX(-${counter * 100}%)`;
  //   });
  // };

  const [sliderStyle, setSliderStyle] = useState({});
  useEffect(() => {
    setSliderStyle({
      transform: `translateX(-${counter * 100}%)`,
    });
  }, [counter]);
  return (
    <>
      <div
        className="slider w-full duration-1000 "
        style={sliderStyle}
        // style={{ transform: `translateX(-${counter * 100}%)` }}
      >
        <div
          className="carousel w-full h-[100vh] flex m-auto  relative "
          key={index}
        >
          <img className="slide w-full bg-cover " src={img} alt="img" />

          <div className="slide absolute duration-1000  text-white  bottom-0   right-0 w-[45%] p-10 bg-gray-100 bg-opacity-10 space-y-3">
            <h1 className="text-2xl capitalize text-red-600">{title}</h1>
            <p className="text-xm">{Desc}</p>
            <Popup
              trigger={
                <button className="bg-red-500 hover:bg-red-400 p-2 rounded-lg text-xl ">
                  Read More
                </button>
              }
              modal
              nested
            >
              {(close) => (
                <div className="modal bg-blue-500 bg-opacity-35 w-96 h-96 flex justify-center items-center flex-col rounded-3xl space-y-7">
                  <div className="content text-2xl text-white capitalize text-center">{title}</div>
                  
                  <button className='bg-blue-500 hover:bg-blue-400 p-2 rounded-lg text-xl text-white' onClick={()=>close()} >
                  Close modal
                  </button>
                </div>
              )}
            </Popup>
          </div>
        </div>
      </div>
    </>
  );
}
