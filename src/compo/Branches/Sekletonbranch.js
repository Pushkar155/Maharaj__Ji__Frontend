import React from 'react';
import "./skeletonbranch.css";

const Sekletonbranch = ({count}) => {
  return (
    Array(count).fill(0).map((_id)=>
      <div className='skeletonbran'>
        <h5>Loading...</h5>
      </div>
    )
  )
}
export default Sekletonbranch