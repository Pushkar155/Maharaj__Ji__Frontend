import React from 'react';
import "./slider.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { useEffect, useState } from 'react';

const SliderCard = () => {

  // const [data, setData] = useState([]);
  // const [isloading,setIsloading]=useState(true);
  // useEffect(() => {
  //   setTimeout(()=>{
  //     fetchData();
  //   },1125);
  // }, []);
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('https://maharaj-ji-backend.vercel.app/API/shlok/getShlok');
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //     // console.log(data);
  //     setIsloading(false);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };
  // console.log(data)


  const slides = [
    {
      id: 1,
      image: 'https://www.linkpicture.com/q/maharj_ji1.png',
      caption: 'Slide 1',
    },
    {
      id: 2,
      image: 'https://www.linkpicture.com/q/WhatsApp-Image-2023-07-18-at-6.05.16-PM.jpeg',
      caption: 'Slide 2',
    },
    {
      id: 3,
      image: 'https://www.linkpicture.com/q/WhatsApp-Image-2023-07-18-at-6.05.15-PM-2.jpeg',
      caption: 'Slide 3',
    },
    {
      id: 4,
      image: 'https://www.linkpicture.com/q/WhatsApp-Image-2023-07-18-at-6.05.14-PM-1.jpeg',
      caption: 'Slide 3',
    },
    // {
    //   id: 5,
    //   image: 'https://www.linkpicture.com/q/maharj_ji-4.png',
    //   caption: 'Slide 3',
    // },
    // {
    //   id: 6,
    //   image: 'https://www.linkpicture.com/q/WhatsApp-Image-2023-07-17-at-11.17.14-AM.jpeg',
    //   caption: 'Slide 3',
    // },
    // {
    //   id: 7,
    //   image: 'https://www.linkpicture.com/q/WhatsApp-Image-2023-07-17-at-11.17.14-AM.jpeg',
    //   caption: 'Slide 3',
    // },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows:false
  };

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {
        slides.map((item,index) => (
          <div>
            <img src={item.image} alt='None'/>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderCard;