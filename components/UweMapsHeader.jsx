import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";

const UweMapsHeader = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header className="header_section">
      <div className="banner_page">
        <div className="hero-text">
          <h1>UWE Maps</h1>
          <h3>An interactive campus map to improve the user experience</h3>
        </div>
      </div>
    </header>
  );
};

export default UweMapsHeader;
