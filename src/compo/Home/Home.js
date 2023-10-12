import React from 'react'
import "./home.css"
import ved from "./background.mp4"
import image from "../../assets/logo_maharaj_ji.jpeg";
import {NavLink} from "react-router-dom";
import song from "../../song/siya ram.mp3"
import ReactAudioPlayer from 'react-audio-player';
import SliderCard from './SliderCard';
import Anounce from './anouncement/Anounce';

const Home = () => {
  return (
    <div className='home'>
      <ReactAudioPlayer
        src={song}
        autoPlay
      /> 
     <video  loop autoPlay muted >
      <source src={ved} type="video/mp4"/>
     </video>
     <div className="home_page">
        <div className="navbar">
          <div className="navbar__left">
                <div className="navbar__img1">
                  <img src={image} alt="" />
                </div>
                <div className="navbar__name">
                  <h3>बाबा विश्वम्भर दास जी महाराज छावनी</h3>
              </div>
          </div>
          <div className="navbar__right">
              <div className="navbar__nav">
                  <h4 className="deoff"><h3>Home</h3></h4>
                  <NavLink to="/branches" className="nav-link" > <h3>Branches</h3> </NavLink>
                  <NavLink to="/gallery" className="nav-link" ><h3>Gallery</h3></NavLink>
                  <NavLink to="/events" className="nav-link" > <h3>Events</h3> </NavLink>
                  <NavLink to="/donate" className="nav-link" > <h3>Donate</h3> </NavLink>
              </div>
          </div>
        </div>
        <div className="sliderstack">
          {/* <h2>गीता के कुछ महत्वपूर्ण श्लोक</h2> */}
          <Anounce/>
          <SliderCard/>
        </div>
        
        {/* new dezine of home page */}
     </div>
    </div>
  )
}

export default Home