import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { styles } from "../src/styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../src/utils/motion";

const StyledButton = styled(Link)`
  width: 200px;
  background-color: #007e88;

  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #00a8d5;
  }
`;
const Container = styled.div`
  padding-bottom: 0; /* Default padding for mobile */
  padding-top: 5rem; /* Default padding for all views */

  @media (min-width: 992px) {
    padding-bottom: 9rem; /* Padding for desktop view */
  }
`;

const Projects = () => {
  return (
    <>
      <main
        id="projects"
        style={{ backgroundColor: "#000202", color: "white" }}
      >
        <h2 className={styles.sectionHeadText}>Projects</h2>
        <span style={{ color: "black" }}>Projects</span>

        <div className="projects-container">
          <div className="project-container">
            <Link to="/ncapi" className="project-link">
              <div className="project-image-container">
                <img
                  src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/nc%20news/nc-api.png"
                  alt="NC API"
                />
              </div>
              <div className="project-info">
                <h3>NC News API</h3>
                <p>
                  A RESTful API designed to interact with a news database
                  containing articles, topics, users, and comments.
                </p>
              </div>
              <StyledButton
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                View Project
              </StyledButton>
            </Link>
          </div>
          <div className="project-container">
            <Link to="/ncnews" className="project-link">
              <div className="project-image-container">
                <img
                  src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/nc%20news/nc%20news.png"
                  alt="NC API"
                />
              </div>
              <div className="project-info">
                <h3>NC News</h3>
                <p>
                  A React application that provides users with a platform to
                  view and interact with articles sourced from the NC News
                  RESTful API.
                </p>
              </div>
              <StyledButton
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                View Project
              </StyledButton>
            </Link>
          </div>
        </div>

        <div className="projects-container">
          <div className="project-container">
            <Link to="/airpark" className="project-link">
              <div className="project-image-container">
                <img
                  src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/airpark/airpark.png"
                  alt="AirPark"
                />
              </div>
              <div className="project-info">
                <h3>AirPark</h3>
                <p>
                  A cross platform mobile app that offers a seamless and
                  convenient parking experience for the travelers.
                </p>
              </div>
              <StyledButton
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                View Project
              </StyledButton>
            </Link>
          </div>
          <div className="project-container">
            <Link to="/UWEMaps" className="project-link">
              <div className="project-image-container">
                <img
                  src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/uwemaps/uwemaps.png"
                  alt="NC API"
                />
              </div>
              <div className="project-info">
                <h3>UWE Campus Map</h3>
                <p>
                  A cross platform mobile application to improve the current UWE
                  campus map and help students, staff, and visitors find a
                  specific location on campus.
                </p>
              </div>
              <StyledButton
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                View Project
              </StyledButton>
            </Link>
          </div>
        </div>

        <div className="projects-container">
          <div className="project-container">
            <Link to="/smwa" className="project-link">
              <div className="project-image-container">
                <img
                  src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/SMWA/SMWA.png"
                  alt="Student Mental Wellbeing Application"
                />
              </div>
              <div className="project-info">
                <h3>Student Mental Wellbeing Application</h3>
                <p>
                  Designing the user experience of a mobile application which
                  was intended to be used by students seeking mental well-being
                  tips, suggestions, and solutions to cope with their situation.
                </p>
              </div>
              <StyledButton
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                View Project
              </StyledButton>
            </Link>
          </div>
          <div className="project-container">
            <Link to="/fp" className="project-link">
              <div className="project-image-container">
                <img
                  src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/fp/fp%20-front.png"
                  alt="FP CAPITAL"
                />
              </div>
              <div className="project-info">
                <h3>Freeley Palmer</h3>
                <p>
                  Designing the wireframes and the prototype of the web
                  application using Figma.
                </p>
              </div>
              <StyledButton
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                View Project
              </StyledButton>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
