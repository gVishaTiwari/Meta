import React,{useState} from 'react';
import { FiArrowLeftCircle,FiArrowRightCircle } from "react-icons/fi";
import { textdata } from "./HomeData";
import './Home.css';
import Carousel from "react-elastic-carousel";
import Item from './Item';


const TextImage = ()=>{

    const [currnet,setCurrent] =useState(0);
    const length = textdata.length;
  
     const prevSlide =()=>{
            setCurrent(currnet===0?length-1:currnet-1)
     }
  
     const nextSlide =()=>{
      setCurrent(currnet===length-1?0:currnet+1)
     }
    return(
        <div className="text-slider">
      {/* <FiArrowLeftCircle className="left-arrow" onClick={prevSlide}/>
        <FiArrowRightCircle className="right-arrow" onClick={nextSlide}/> */}
        <Carousel styles={{background:'none'}} itemsToShow={4} itemsToScroll={2}>
        {textdata.map((item,index)=>{

          return (
              // <div className={index===currnet?'slide active':'slide'} key={index}>
                // {index===currnet&&(<Item><img src={item.url} alt="missing" className="text-image"/></Item>)}
              // </div>
              <Item><img src={item.url} alt="missing" className="text-image"/></Item>
          )
        
        })}
        </Carousel>
      </div>
    )
}



export default TextImage;