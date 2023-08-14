import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Textslider() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    dots: false,
    infinite: true,
    arrows: false,
    // speed: 10000,
    // fade: true,
    // slide: 'div',
    // cssEase: 'linear'
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <p className="text-4xl">The Best</p>
        <h1 className="text-[80px] font-semibold">Online Casino</h1>
        <p className="text-4xl">GENUINE MONEY TRANSACTION</p>
        <p className="text-2xl w-1/2">
          Assertively Communicate An Expanded Array Of Mindshare Rather Than
          Diverse Technologies For Magnetic Applications Eamlessly Virtual Then
          Conveniently Monetize Synergistic Human Capital
        </p>
        <button
          type="button"
          className="mt-10 w-fit bg-theme-grey-500 text-white py-2 px-6 rounded-lg"
        >
          Join us Now
        </button>
      </div>
      <div>
        <p className="text-4xl">The Best</p>
        <h1 className="text-[80px] font-semibold">Online Casino</h1>
        <p className="text-4xl">GENUINE MONEY TRANSACTION</p>
        <p className="text-2xl w-1/2">
          Assertively Communicate An Expanded Array Of Mindshare Rather Than
          Diverse Technologies For Magnetic Applications Eamlessly Virtual Then
          Conveniently Monetize Synergistic Human Capital
        </p>
        <button
          type="button"
          className="mt-10 w-fit bg-theme-grey-500 text-white py-2 px-6 rounded-lg"
        >
          Join us Now
        </button>
      </div>
      <div>
        <p className="text-4xl">The Best</p>
        <h1 className="text-[80px] font-semibold">Online Casino</h1>
        <p className="text-4xl">GENUINE MONEY TRANSACTION</p>
        <p className="text-2xl w-1/2">
          Assertively Communicate An Expanded Array Of Mindshare Rather Than
          Diverse Technologies For Magnetic Applications Eamlessly Virtual Then
          Conveniently Monetize Synergistic Human Capital
        </p>
        <button
          type="button"
          className="mt-10 w-fit bg-theme-grey-500 text-white py-2 px-6 rounded-lg"
        >
          Join us Now
        </button>
      </div>
    </Slider>
  );
}

export default Textslider;
