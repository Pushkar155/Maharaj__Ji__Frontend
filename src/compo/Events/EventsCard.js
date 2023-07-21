import React from 'react';
import "./eventscard.css";

// import sample from "./sample.jpg";
import Addbuttons from './Addbuttons';

const EventsCard = ({image,name,text1}) => {
  return (
    <div className='eventscard'>
        <img src={image} alt="" />
        <h2>{name}</h2>
        <Addbuttons text={text1}/>
    </div>
  )
}
export default EventsCard
