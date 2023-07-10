import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <main id="projects">
      <h2>Projects</h2>
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
            <img
              className="image-button"
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/viewProject.png"
              alt="view project"
            />
          </Link>
        </div>
        <div className="project-container">
          <Link to="/ncnews" className="project-link">
            <div className="project-image-container">
              <img
                src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/nc%20news/nc-front-end.png"
                alt="NC API"
              />
            </div>
            <div className="project-info">
              <h3>NC News</h3>
              <p>
                A React application that provides users with a platform to view
                and interact with articles sourced from the NC News RESTful API.
              </p>
            </div>
            <img
              className="image-button"
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/viewProject.png"
              alt="view project"
            />
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
            <img
              className="image-button"
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/viewProject.png"
              alt="view project"
            />
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
            <img
              className="image-button"
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/viewProject.png"
              alt="view project"
            />
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
                Designing the user experience of a mobile application which was
                intended to be used by students seeking mental well-being tips,
                suggestions, and solutions to cope with their situation.
              </p>
            </div>
            <img
              className="image-button"
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/viewProject.png"
              alt="view project"
            />
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
            <img
              className="image-button"
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/viewProject.png"
              alt="view project"
            />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Projects;
