import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const checkWindowSize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <Link
          to="/?section=home"
          className="navbar_link"
          onClick={handleLinkClick}
        >
          <img
            src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/logo.png"
            alt=""
          />
        </Link>
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
                to="/?section=home"
                className="navbar_link"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                to="/?section=skills"
                className="navbar_link"
                onClick={handleLinkClick}
              >
                Skills
              </Link>
              <Link
                to="/?section=about"
                className="navbar_link"
                onClick={handleLinkClick}
              >
                About
              </Link>
              <Link
                to="/?section=projects"
                className="navbar_link"
                onClick={handleLinkClick}
              >
                Projects
              </Link>

              <Link
                to="/?section=contact"
                className="navbar_link"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="navbar_links">
          <Link
            to="/?section=home"
            className="navbar_link"
            onClick={handleLinkClick}
          >
            Home
          </Link>

          <Link
            to="/?section=skills"
            className="navbar_link"
            onClick={handleLinkClick}
          >
            Skills
          </Link>
          <Link
            to="/?section=about"
            className="navbar_link"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to="/?section=projects"
            className="navbar_link"
            onClick={handleLinkClick}
          >
            Projects
          </Link>
          <Link
            to="/?section=contact"
            className="navbar_link"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
