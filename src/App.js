import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import React, { useState, useEffect } from "react";
import Image from "./assets/video-2.mp4";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import "./App.css";
import SecondSection from "./Components/SecondSection";
// import FirstSection from './Components/FirstSection';
// import SecondSection from "./Components/SecondSection";
const VideoComponent = () => {
  // const setVideoDimensions = () => {
  //   const video = document.getElementById("myVideo");
  //   const windowWidth = window.innerWidth;
  //   const windowHeight = window.innerHeight;

  //   if (video) {
  //     video.style.width = `${windowWidth}px`;
  //     video.style.height = `${windowHeight}px`;
  //   }
  // };

  // useEffect(() => {
  //   setVideoDimensions();
  //   window.addEventListener("resize", setVideoDimensions);

  //   // Clean up the event listener when component unmounts
  //   return () => {
  //     window.removeEventListener("resize", setVideoDimensions);
  //   };
  // }, []);

  return (
    <div className="loader-container video-container">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="w-screen object-cover h-screen"
      >
        <source src={Image} type="video/mp4" />
      </video>
    </div>
  );
};

const App = () => {
  const ref = useRef(null);

  const options = {
    smooth: true,
    // multiplier: 1,
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="">
      {loading ? (
        <VideoComponent />
      ) : (
        <div className="main-content">
          <LocomotiveScrollProvider options={options}>
            <main data-scroll-container ref={ref}>
              <Header />
              <section
                className="intro"
                data-scroll //This attribute makes this section an independent scrollable container
                data-scroll-speed="4"
                data-scroll-section
              >
                <Banner />
              </section>


              <div className="section-2" data-scroll-section>
                {/* <h1
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="9"
                >
                  I Love React
                </h1>
                <h1
                  data-scroll
                  data-scroll-direction="vertical"
                  data-scroll-speed="9" // Values provided here affect the animations
                >
                  That's why I code every day
                </h1> */}
                <SecondSection />
              </div>

              {/* <section id="stick" data-scroll-section>
                <h1
                  data-scroll
                  data-scroll-speed="5"
                  data-scroll-sticky
                  data-scroll-target="#stick"
                >
                  Hey I'm Sticky
                </h1>
                <p>other contents</p>
                <p>other contents</p>
                <p>other contents</p>
                <p>other contents</p>
                <p>other contents</p>
                <p>other contents</p>
                <p>other contents</p>
                <p>other contents</p>
              </section> */}

              <section className="footer" data-scroll-section>
                <h1
                  className="op-class"
                  data-scroll
                  data-scroll-class="fadeIn"
                  data-scroll-repeat="true"
                  data-scroll-speed="2"
                >
                  Let's end the application with this Footer
                </h1>
              </section>
            </main>
          </LocomotiveScrollProvider>
        </div>
      )}
    </div>
  );
};

export default App;

<main>
  <section className="intro">
    <h1>This is the Introduction section</h1>
  </section>

  <section className="contents">
    <h1>I Love React</h1>
  </section>

  <section id="stick">
    <h1>Hey I'm Sticky</h1>
    <p>other contents</p>
    <p>other contents</p>
    <p>other contents</p>
    <p>other contents</p>
    <p>other contents</p>
    <p>other contents</p>
    <p>other contents</p>
    <p>other contents</p>
  </section>

  <section className="footer">
    <h1>Let's end the application with this Footer</h1>
  </section>
</main>;
