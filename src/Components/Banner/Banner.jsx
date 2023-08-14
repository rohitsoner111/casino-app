import React from "react";
import Image from "../../assets/video-1.mp4";
// import Slider from "react-slick";
import Slider from "../Slider/Slider"


function Banner() {
  return (
    <div className="banner relative" >
      <div className="bannerImage">
        {/* <img src={Image} className="w-full" /> */}

				<video autoPlay muted loop id="myVideo" className="w-screen">
        <source src={Image} type="video/mp4" />
      </video>
      </div>
      <div className="banner-content absolute top-0 bottom-0 flex flex-col justify-center bg-theme-grey-100 w-full mix-blend-hard-light">
        <div className="container m-auto">
        <Slider />
        </div>
      </div>
    </div>
  );
}

export default Banner;
