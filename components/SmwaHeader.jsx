import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";

const SmwaHeader = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header className="header_section">
      <div className="banner_page">
        <div className="hero-text">
          <h1>Student Mental Wellbeing Application </h1>
          <h3>Designing User Experience</h3>
        </div>
      </div>
    </header>
  );
};

export default SmwaHeader;
