import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import Item from "./Item";


const Home=()=> {
  
  const items = [
    {
      id:'1',
      url:"https://img.freepik.com/free-vector/realistic-3d-podium-background_23-2149166921.jpg?w=900&t=st=1661321796~exp=1661322396~hmac=71a42bfbb78a499c2e8ec7475c229fc3b8eee691bf1fd51dce3b5db163bc31d1"
    
    },
    {
           id:'2',
           url:"https://img.freepik.com/premium-vector/realistic-3d-podium-with-lights_23-2149088231.jpg"
    },
    {
        id:'3',
        url:"https://img.freepik.com/premium-vector/realistic-podium-background_23-2149146428.jpg"
    },
    {
      id:'4',
      url:"https://img.freepik.com/premium-vector/gradient-podium-design-3d-rendering_23-2149083182.jpg"

    },
    {
         id:'5',
         url:"https://img.freepik.com/free-vector/podium-with-lights-futuristic-background_23-2148729550.jpg?size=626&ext=jpg"
    },
    {
        id:'6',
        url:"https://img.freepik.com/premium-vector/3d-podium-rendering-with-color-year-2022_23-2149217376.jpg"
    },
  ]
  return (
   
     
      <Div>
        <Carousel >
          {items.map((item) => (
         <Item key={item}><img src={item.url} alt='missing'/></Item>)
          )}
        </Carousel>
      </Div>
   
  );
}

const Div = styled.div`
height:100%,
width:100%
`;
export default Home;