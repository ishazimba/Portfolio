import React from "react";

import {
  FaMobile,
  FaDesktop,
  FaTablet,
  FaPalette,
  FaPaintBrush,
} from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header className="header_section">
      <div className="banner_page">
        <div className="hero-text">
          <h1>Hello, I am Isha Tamang </h1>
          <h3>A Software Engineer/UX Designer</h3>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar_link"
          >
            <button className="projects-button">Projects</button>
          </Link>
        </div>

        {/**
         * <div className="hero-icons">
          <FaMobile className="hero-icon" />
          <FaDesktop className="hero-icon" />
          <FaTablet className="hero-icon" />
          <FaPalette className="hero-icon" />
          <FaPaintBrush className="hero-icon" />
        </div>
         */}
      </div>
    </header>
  );
};

export default Header;
