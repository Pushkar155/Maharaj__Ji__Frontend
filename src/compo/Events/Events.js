import React from 'react'
import "./event.css";
import image from "../../assets/logo_maharaj_ji.jpeg";
import EventsCard from './EventsCard';
import {NavLink} from "react-router-dom";
import Skeltonevent from './Skeltonevent';
import { useEffect, useState } from 'react';

const Events = () => {
  const [data, setData] = useState([]);
  const [isloading,setIsloading]=useState(true);
  useEffect(() => {
    setTimeout(()=>{
      fetchData();
    },1000);
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('https://maharaj-ji-backend.vercel.app/API/event/getEvent');
      const jsonData = await response.json();
      setData(jsonData);
      setIsloading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="eranch_page">
    <div className="enavbar">
      <div className="enavbar__left">
            <div className="enavbar__img1">
              <img src={image} alt="" />
            </div>
            <div className="enavbar__name">
              <h3>बाबा विश्वम्भर दास जी महाराज छावनी</h3>
          </div>
      </div>
      <div className="enavbar__right">
          <div className="enavbar__nav">
              <NavLink to="/" className="nav-link" > Home </NavLink>
              <h4 className='deoff'>Events</h4>
          </div>
      </div>
    </div>
    <div className="contaer">
    {isloading && <Skeltonevent count={10}/>}
          {
        data.map((item,index)=>(
          <EventsCard image={item.image} name={item.name}/>
        ))}
    </div>
    </div>
  )
}

export default Events