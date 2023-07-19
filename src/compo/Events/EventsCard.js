import React from 'react';
import "./eventscard.css";
// import sample from "./sample.jpg";

const EventsCard = ({image,name}) => {
  return (
    <div className='eventscard'>
        <img src={image} alt="" />
        <h2>{name}</h2>
    </div>
  )
}
export default EventsCard
