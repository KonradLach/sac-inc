import React, {useEffect, useState} from 'react';
import BackgroundSlider from 'react-background-slider'
import Img1 from "../assets/img1.jpeg"
import Img3 from "../assets/img3.jpeg"
import "../styles/Home.css"
import logo from "../assets/Logo.png"
function Home() {
  return (
    <div className="Home">
      <div className='Home-title'>
        <img src={logo}></img>
        {/* <h2>SAC Inc</h2>
        <h3 >Illinois and Indiana Siding Experts</h3> */}
      </div>
        <BackgroundSlider
        images={[Img1,Img3]}
        duration={10} transition ={2}/>
    </div>
  );
}

export default Home;
