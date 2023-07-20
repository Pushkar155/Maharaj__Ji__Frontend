import React from 'react';
import "./cardskelton.css";

const CardSkeleton = ({count}) => {
  return (
    Array(count).fill(0).map((_id)=>
      <div className='skelton'>
        <h5>Loading...</h5>
      </div>
    )
  )
}

export default CardSkeleton
