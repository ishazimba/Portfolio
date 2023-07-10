import React from "react";

import { animateScroll as scroll } from "react-scroll";

const NcApiHeader = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header className="header_section">
      <div className="banner_page">
        <div className="hero-text">
          <h1 className="text-3xl sm:text-5xl font-bold">NC News API </h1>
          <h3 className="text-xl sm:text-2xl">
            A RESTful API designed to interact with a news database
          </h3>
        </div>
      </div>
    </header>
  );
};

export default NcApiHeader;
