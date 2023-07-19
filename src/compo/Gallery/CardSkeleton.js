import React from 'react';
import "./cardskelton.css";

const CardSkeleton = ({count}) => {
  return (
    Array(count).fill(0).map((_id)=>
      <div className='skelton'>
      </div>
    )
  )
}

export default CardSkeleton
