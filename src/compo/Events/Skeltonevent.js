import React from 'react';
import "./skeltonevent.css";

const Skeltonevent = ({count}) => {
  return (
    Array(count).fill(0).map((_id)=>
        <div className='skevent1'>
            <div className="skevent"></div>
            <div className='new1'></div>
        </div>
    )
  )
}
export default Skeltonevent;