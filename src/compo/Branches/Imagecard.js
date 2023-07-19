import React from 'react';
import "./imagecard.css";
// import sample from "./sample.jpg";

const Imagecard = ({image,name}) => {
  return (
    <div className='image__card'>
        <img src={image} alt="" />
        <h6>{name}</h6>
    </div>
  )
}
export default Imagecard

