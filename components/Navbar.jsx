import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    setIsOpen(false);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value based on current screen size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar_logo" onClick={scrollToTop}>
        Isha Tamang
      </div>
      {isMobile ? (
        <div className="navbar_links mobile" onClick={toggleMenu}>
          <div className={`hamburger-icon ${isOpen ? "open" : ""}`}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          {isOpen && (
            <div className="menu">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar_link"
              >
                Home
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar_link"
              >
                Projects
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar_link"
              >
                Skills
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar_link"
              >
                About
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar_link"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="navbar_links">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar_link"
          >
            Home
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar_link"
          >
            Projects
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar_link"
          >
            Skills
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar_link"
          >
            About
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar_link"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
