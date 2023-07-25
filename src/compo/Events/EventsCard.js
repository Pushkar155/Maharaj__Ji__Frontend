import React from 'react';
import "./eventscard.css";

// import sample from "./sample.jpg";
// import Addbuttons from './Addbuttons';

const EventsCard = ({image,name,text1}) => {
  return (
    <div className='card1'>
      <div className='imgbox1'>
          <img src={image} alt="" />
      </div>
      <div className="content1">
        <h2>{name}</h2>
        {/* <p>{text1}</p> */}
      </div>
    </div>
  )
}
export default EventsCard
