import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";

const NcNewsHeader = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header className="header_section">
      <div className="banner_page">
        <div className="hero-text">
          <h1>NC News</h1>
          <h3>A React Application</h3>
        </div>
      </div>
    </header>
  );
};

export default NcNewsHeader;
