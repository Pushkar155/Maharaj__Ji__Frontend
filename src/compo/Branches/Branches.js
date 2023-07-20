import React from 'react';
import "./branches.css";
import image from "../../assets/logo_maharaj_ji.jpeg";
import Imagecard from './Imagecard';
import {NavLink} from "react-router-dom";
import { useEffect, useState } from 'react';
import Sekletonbranch from './Sekletonbranch';
import ReactAudioPlayer from 'react-audio-player';
import song from "../../song/siya ram.mp3";

const Branches = () => {
  const [data, setData] = useState([]);
  const [isloading,setIsloading]=useState(true);
  useEffect(() => {
    setTimeout(()=>{
      fetchData();
    },1000);
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('https://maharaj-ji-backend.vercel.app/API/branch/getBranch');
      const jsonData = await response.json();
      setData(jsonData);
      setIsloading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
        <div className="branch_page">
          <ReactAudioPlayer
            src={song}
            autoPlay
            loop
          />
        <div className="bnavbar">
          <div className="bnavbar__left">
                <div className="bnavbar__img1">
                  <img src={image} alt="" />
                </div>
                <div className="bnavbar__name">
                  <h3>बाबा विश्वम्भर दास जी महाराज छावनी</h3>
              </div>
          </div>
          <div className="bnavbar__right">
              <div className="bnavbar__nav">
                  <NavLink to="/" className="nav-link" > Home </NavLink>
                  <h4 className='deoff'>Branches</h4>
              </div>
          </div>
        </div>
        <div className="container">
          {isloading && <Sekletonbranch count={10}/>}
          {
        data.map((item,index)=>(
          <Imagecard image={item.image} name={item.name}/>
        ))}
        </div>
     </div>
  )
}
export default Branches;
