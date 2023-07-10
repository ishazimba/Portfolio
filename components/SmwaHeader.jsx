import React from "react";

import { animateScroll as scroll } from "react-scroll";

const SmwaHeader = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header className="header_section">
      <div className="banner_page">
        <div className="hero-text">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Student Mental Wellbeing Application{" "}
          </h1>
          <h3 className="text-xl sm:text-2xl">Designing User Experience</h3>
        </div>
      </div>
    </header>
  );
};

export default SmwaHeader;
