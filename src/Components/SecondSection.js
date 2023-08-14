import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CartoonImg from "../assets/cartoon.png";
import jackCoin from "../assets/jackcoin.png";
import Tro1 from "../assets/tro1.png";
import Tro2 from "../assets/tro2.png";
import Tro3 from "../assets/tro3.png";
import hShape from "../assets/h2-shape.png";

function SecondSection() {
  useEffect(() => {
    console.log('useEffect triggered');
    AOS.init();
    // AOS.refresh();
  }, []);

  return (
    <div className="secondSection">
      <div className="w-full m-auto relative">
        <img src={CartoonImg} className="w-3/12 m-auto mix-blend-luminosity" />

        <div className="absolute top-0 left-0 right-0">
          <img src={hShape} className="w-3/4 m-auto p-5 mix-blend-luminosity" />
        </div>
      </div>

      <div className="container m-auto">
        <div className="text-white text-2xl">
          <div className="flex justify-between items-center bg-gradient1">
            <div className="w-3/12">
              <img src={jackCoin} className="w-full" />
            </div>
            <div>
              <p>Prize Pool</p>
              <p>$2761338</p>
            </div>
          </div>
          <ul className="gap-5 detail-colum">
            <li
              className="flex justify-between items-center bg-gradient2">
              <div className="innerGradient">
                <div className="w-3/12">
                  <img src={jackCoin} className="w-full" />
                </div>
                <div>
                  <p>Prize Pool</p>
                  <p>$2761338</p>
                </div>
              </div>
            </li>

            <li
              className="flex justify-between items-center bg-gradien2" data-aos="fade-in" data-aos-id="super-duper">
              <div className="innerGradient">
                <div className="w-3/12">
                  <img src={jackCoin} className="w-full" />
                </div>
                <div>
                  <p>Prize Pool</p>
                  <p>$2761338</p>
                </div>
              </div>
            </li>

            <li
              className="flex justify-between items-center bg-gradient2">
              <div className="innerGradient">
                <div className="w-3/12">
                  <img src={jackCoin} className="w-full" />
                </div>
                <div>
                  <p>Prize Pool</p>
                  <p>$2761338</p>
                </div>
              </div>
            </li>

            <li
              className="flex justify-between items-center bg-gradient2">
              <div className="innerGradient">
                <div className="w-3/12">
                  <img src={jackCoin} className="w-full" />
                </div>
                <div>
                  <p>Prize Pool</p>
                  <p>$2761338</p>
                </div>
              </div>
            </li>

            <li
              className="flex justify-between items-center bg-gradien2">
              <div className="innerGradient">
                <div className="w-3/12">
                  <img src={jackCoin} className="w-full" />
                </div>
                <div>
                  <p>Prize Pool</p>
                  <p>$2761338</p>
                </div>
              </div>
            </li>

            <li
              className="flex justify-between items-center bg-gradient2">
              <div className="innerGradient">
                <div className="w-3/12">
                  <img src={jackCoin} className="w-full" />
                </div>
                <div>
                  <p>Prize Pool</p>
                  <p>$2761338</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
