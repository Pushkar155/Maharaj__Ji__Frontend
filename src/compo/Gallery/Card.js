import React from 'react'
import "./card.css"
// import image from "./maharj_ji1.png"

const Card = ({image}) => {
  return (
    <div className='card'>
        <img src={image} alt="" />
    </div>
  )
}

export default Card
