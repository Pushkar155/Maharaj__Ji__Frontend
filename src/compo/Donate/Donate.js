import React from 'react';
import "./donate.css";
import image from "../../assets/logo_maharaj_ji.jpeg";
import sample from "../../assets/sample1.jpeg";
import {NavLink} from "react-router-dom";
const link="https://docs.google.com/forms/d/e/1FAIpQLSfsM9-Zd1u8_1FeacHhK6Cwt606vRktQYunI40_RdkMK4IKqA/viewform?usp=sf_link";

const Donate = () => {
  return (
    <div className="dranch_page">
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
              <NavLink to="/" className="nav-link" > Home </NavLink>
              <h4 className='deoff'>Donate Us</h4>
          </div>
      </div>
    </div>
    <div className="new__dpage">
        <img src={sample} alt="" />
        <h2>कृपया दान देने के बाद यह फॉर्म भरें</h2>
        <h2>&#8681;</h2>
        <a href={link} target='_blank'  rel="noreferrer">
            <button>फॉर्म</button>
        </a>
    </div>
    </div>
  )
}
export default Donate