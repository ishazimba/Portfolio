import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header className="header_section">
      <div className="banner_page">
        <div className="hero-text">
          <h1 className="text-3xl sm:text-5xl font-bold">Hello,</h1>
          <h1 className="text-3xl sm:text-5xl font-bold">I am Isha Tamang</h1>
          <h3 className="text-xl sm:text-2xl">
            A Software Engineer/ UX Designer
          </h3>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar_link_projects"
          >
            <button className="projects-button">Projects</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
