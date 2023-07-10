import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";

const FpHeader = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header className="header_section">
      <div className="banner_page">
        <div className="hero-text">
          <h1 className="text-3xl sm:text-5xl font-bold">FREELEY PALMER</h1>
          <h3 className="text-xl sm:text-2xl">
            Designing the User Interface of a Finance Company
          </h3>
        </div>
      </div>
    </header>
  );
};

export default FpHeader;
