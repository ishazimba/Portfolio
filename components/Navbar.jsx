import React, { useState } from "react";
import { Link } from "react-router-dom";

import ContactLinks from "./contactLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top "
      style={{
        backgroundColor: "#00191e",
        borderBottom: "0.1px solid #007E88",
      }}
    >
      <div className="container">
        <Link to="/?section=home" className="navbar-brand">
          <img
            src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/logo.png"
            width="60"
            alt=""
          />
        </Link>
        <div className="flex text-secondary ">
          <ContactLinks size={30} />
        </div>

        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ml-auto text-right">
            <li className="nav-item">
              <Link
                to="/?section=home"
                className="nav-link"
                onClick={handleLinkClick}
                style={{ fontSize: "25px" }}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/?section=about"
                className="nav-link"
                onClick={handleLinkClick}
                style={{ fontSize: "25px" }}
              >
                About
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/?section=skills"
                className="nav-link"
                onClick={handleLinkClick}
                style={{ fontSize: "20px" }}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/?section=projects"
                className="nav-link"
                onClick={handleLinkClick}
                style={{ fontSize: "20px" }}
              >
                Projects
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                to="/?section=contact"
                className="nav-link"
                onClick={handleLinkClick}
                style={{ fontSize: "25px" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style>
        {`
          .navbar-nav .nav-link {
            margin-left: 4rem;
            color: #fff;
          
           
          }

          .navbar-nav .nav-link:hover {
            color: #87ceeb;
            cursor: pointer;
           
          }
          
     

          .navbar-dark .navbar-nav .nav-link {
            color: #fff;
          }
          
          .navbar-dark .navbar-nav .nav-link:hover {
            color: #87ceeb;
            cursor: pointer;
          }
          
          .navbar-nav.ml-auto {
            margin-left: auto;
          }

          @media (max-width: 767px) {
            .navbar-nav .nav-link {
              margin-left: 0; 
              margin-right: 20px; 
              text-align: right;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
