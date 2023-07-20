import React from 'react';
import "./skeltonevent.css";

const Skeltonevent = ({count}) => {
  return (
    Array(count).fill(0).map((_id)=>
        <div className='skevent1'>
          <h5>Loading...</h5>
        </div>
    )
  )
}
export default Skeltonevent;