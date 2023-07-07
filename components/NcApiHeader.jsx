import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";

const NcApiHeader = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header className="header_section">
      <div className="banner_page">
        <div className="hero-text">
          <h1>NC News API </h1>
          <h3>A RESTful API designed to interact with a news database</h3>
        </div>
      </div>
    </header>
  );
};

export default NcApiHeader;
