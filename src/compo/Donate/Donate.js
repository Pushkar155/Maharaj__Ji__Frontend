import React from 'react';
import "./donate.css";
import image from "../../assets/logo_maharaj_ji.jpeg";
import sample from "../../assets/sample1.jpeg";
import {NavLink} from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player';
import song from "../../song/siya ram.mp3";
const link="https://docs.google.com/forms/d/e/1FAIpQLSfsM9-Zd1u8_1FeacHhK6Cwt606vRktQYunI40_RdkMK4IKqA/viewform?usp=sf_link";


const Donate = () => {
  return (
    <div className="dranch_page">
      <ReactAudioPlayer
        src={song}
        autoPlay
      />
    <div className="dnavbar">
      <div className="dnavbar__left">
            <div className="dnavbar__img1">
              <img src={image} alt="" />
            </div>
            <div className="dnavbar__name">
              <h3>बाबा विश्वम्भर दास जी महाराज छावनी</h3>
          </div>
      </div>
      <div className="dnavbar__right">
          <div className="dnavbar__nav">
              <NavLink to="/" className="nav-link" > <h3>Home</h3> </NavLink>
              <h3 className='deoff'><h3>Donate</h3></h3>
          </div>
      </div>
    </div>
    <div className="new__dpage">
        <img src={sample} alt="" />
        <h2>कृपया दान देने के बाद यह फॉर्म भरें</h2>
        <h2>&#8681;</h2>
        <a href={link} target='_blank'  rel="noreferrer">
            <button className='button-74'>फॉर्म</button>
        </a>
    </div>
    </div>
  )
}
export default Donate