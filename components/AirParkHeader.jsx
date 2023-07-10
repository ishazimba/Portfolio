import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";

const AirparHeader = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header className="header_section">
      <div className="banner_page">
        <div className="hero-text">
          <h1 className="text-3xl sm:text-5xl font-bold">AirPark</h1>

          <h3 className="text-xl sm:text-2xl">
            A cross-platform mobile application offering a seamless and
            convenient parking experience for the travellers.
          </h3>
        </div>
      </div>
    </header>
  );
};

export default AirparHeader;
