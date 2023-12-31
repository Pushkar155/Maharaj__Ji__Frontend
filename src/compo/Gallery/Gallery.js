import React from 'react'
import "./gallery.css";
import image from "../../assets/logo_maharaj_ji.jpeg";
import Card from './Card';
import {NavLink} from "react-router-dom";
import { useEffect, useState } from 'react';
import CardSkeleton from './CardSkeleton';
import ReactAudioPlayer from 'react-audio-player';
import song from "../../song/siya ram.mp3"

const Gallery = () => {  
  const [data, setData] = useState([]);
  const [isloading,setIsloading]=useState(true);
  useEffect(() => {
    setTimeout(()=>{
      fetchData();
    },1125);
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('https://maharaj-ji-backend.vercel.app/API/gallery/getgallery');
      const jsonData = await response.json();
      setData(jsonData);
      setIsloading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="granch_page">
        <ReactAudioPlayer
        src={song}
        autoPlay
      />
    <div className="gnavbar">
      <div className="gnavbar__left">
            <div className="gnavbar__img1">
              <img src={image} alt="" />
            </div>
            <div className="gnavbar__name">
              <h3>बाबा विश्वम्भर दास जी महाराज छावनी</h3>
          </div>
      </div>
      <div className="gnavbar__right">
          <div className="gnavbar__nav">
              <NavLink to="/" className="nav-link" > <h3>Home</h3> </NavLink>
              <h3 className='deoff'><h3>Gallery</h3></h3>
          </div>
      </div>
    </div>
    <div className="acontainer">
      {/* <CardSkeleton count={10}/> */}
      {/* <div className='block'></div> */}
      {isloading && <CardSkeleton count={10}/>}
      {
        data.map((item,index)=>(
          <Card image={item.image}/>
        ))}
    </div>
 </div>
  )
}
export default Gallery
