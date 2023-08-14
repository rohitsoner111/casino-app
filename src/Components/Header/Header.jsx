import React from "react";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function Header() {
  return (
    <header className="flex gap-10 items-center bg-theme-grey-100 h-24 fixed top-0 w-full z-[999]">
        <div className="flex gap-10 items-center m-auto container">
      <div className="flex grow items-center gap-10">
        <div>
          <a href="#">
            <img src="https://www.cdn.arcanebet.com/images/logo/brand-logo-desktop-ua.svg" />
          </a>
        </div>
        <nav className="navigation-tab">
          <ul className="flex text-white gap-2">
            <li className="bg-[#12432E] border-2 border-border-color-100 hover:border-border-color-100 py-2 px-9 rounded-lg">
              <a href="#" className="text-xl">Casino</a>
            </li>

            <li className="py-2 px-9 hover:bg-[#12432E] hover:border-border-color-100 hover:rounded-lg hover:border-2 border-2 border-transparent">
              <a href="#" className="text-xl">Live Casino</a>
            </li>

            <li className="py-2 px-9 hover:bg-[#12432E] hover:border-border-color-100 hover:rounded-lg hover:border-2 border-2 border-transparent">
              <a href="#" className="text-xl">Promotion</a>
            </li>

            <li className="py-2 px-9 hover:bg-[#12432E] hover:border-border-color-100 hover:rounded-lg hover:border-2 border-2 border-transparent">
              <a href="#" className="text-xl">Loyalty</a>
            </li>

            <li className="py-2 px-9 hover:bg-[#12432E] hover:border-border-color-100 hover:rounded-lg hover:border-2 border-2 border-transparent">
              <a href="#" className="text-xl">Winners</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex gap-10">
        <button type="button" className="bg-theme-grey-900 text-white py-2 px-6 rounded-lg">Login</button>
        <button type="button" className="bg-yellow-700 text-black py-2 px-6 rounded-lg">Sign up</button>
      </div>
      </div>
    </header>
  );
}

export default Header;
