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
          <h1>FREELEY PALMER</h1>
          <h3>Designing the User Interface of a Finance Company</h3>
        </div>
      </div>
    </header>
  );
};

export default FpHeader;
