import React from 'react'
import "./home.css"
import ved from "./background.mp4"
import image from "../../assets/logo_maharaj_ji.jpeg";
import {NavLink} from "react-router-dom";

const Home = () => {
  return (
    <div className='home'>
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
                  <h4 className="deoff">Home</h4>
                  <NavLink to="/branches" className="nav-link" > Branches </NavLink>
                  <NavLink to="/gallery" className="nav-link" > Gallery </NavLink>
                  <NavLink to="/events" className="nav-link" > Events </NavLink>
                  <NavLink to="/donate" className="nav-link" > Donate Us </NavLink>
              </div>
          </div>
        </div>
     </div>
    </div>
  )
}

export default Home