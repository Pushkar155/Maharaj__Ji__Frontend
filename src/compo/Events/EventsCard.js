import React from 'react';
import "./eventscard.css";

// import sample from "./sample.jpg";
// import Addbuttons from './Addbuttons';

const EventsCard = ({image,name,text1}) => {
  return (
    <div className='card'>
      <div className='imgbox'>
          <img src={image} alt="" />
      </div>
      <div className="content">
        <h2>{name}</h2>
        {/* <p>{text1}</p> */}
      </div>
    </div>
  )
}
export default EventsCard
