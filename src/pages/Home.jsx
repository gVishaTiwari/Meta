import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import Item from "./Item";
import {imgdata} from './HomeData';
import './Home.css';
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";
import HomeText from "./HomeText";


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
   
    
      <div className="home">
                <div className="hide">
        <FiChevronLeft className="left-arrow" color="black" onClick={prevSlide} size='50px'/>
        <FiChevronRight className="right-arrow" color="black" onClick={nextSlide} size='50px'/>
      
       
        </div>
        {imgdata.map((item,index)=>{

          return (
            
              <div className={index===currnet?'slide active':'slide'} key={index}>
                
                {index===currnet&&(<img src={item.url} alt="missing" className="image"/>)}
              
              </div>
          )
        
        })}
      
      

     
      </div>
   
  );
}



export default Home;