import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import Item from "./Item";
import {imgdata} from './HomeData';
import './Home.css';
import { FiArrowLeftCircle,FiArrowRightCircle } from "react-icons/fi";


const Home=()=> {
  
  const [currnet,setCurrent] =useState(0);
  const length = imgdata.length;

   const prevSlide =()=>{
          setCurrent(currnet===0?length-1:currnet-1)
   }

   const nextSlide =()=>{
    setCurrent(currnet===length-1?0:currnet+1)
   }
  return (
   
     <>
      <section className="slider">
        <FiArrowLeftCircle className="left-arrow" onClick={prevSlide}/>
        <FiArrowRightCircle className="right-arrow" onClick={nextSlide}/>
        {imgdata.map((item,index)=>{

          return (
              <div className={index===currnet?'slide active':'slide'} key={index}>
                {index===currnet&&(<img src={item.url} alt="missing" className="image"/>)}
              </div>
          )
        
        })}
      </section>

     
      </>
   
  );
}



export default Home;