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
                style={{ fontSize: "20px" }}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/?section=about"
                className="nav-link"
                onClick={handleLinkClick}
                style={{ fontSize: "20px" }}
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
                style={{ fontSize: "20px" }}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a
                class="nav-link"
                href="https://drive.google.com/file/d/1dhcxyIBRCid4BcrwdvJVcc7F9QYu4hH5/view?usp=sharing"
                target="_blank"
                style={{
                  fontSize: "20px",
                  border: "2px solid #07E2F4",

                  width: "5rem",
                  textAlign: "center",
                }}
              >
                CV
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style>
        {`
          .navbar-nav .nav-link {
            margin-left: 4rem;
            color: #fff;
            background-color: transparent;
          
           
          }

          .navbar-nav .nav-link:hover {
            color: white;
            cursor: pointer;
            background-color: #07E2F4; 
          
           
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
            .nav-item:last-child {
              text-align: right;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
