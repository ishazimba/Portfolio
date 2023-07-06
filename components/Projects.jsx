import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <main id="projects">
      <h1>Portfolio</h1>
      <div className="projects-container">
        <div className="project-container">
          <Link to="/fp" className="project-link">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/fp/fp%20-front.png"
              alt="FP CAPITAL"
            />
            <h3>Student Mental Wellbeing Application</h3>
            <p>
              Designing the user experience of a student mental wellbeing
              application that is intended to be used by students seeking mental
              well-being tips, suggestions, and solutions to cope with their
              situation application.
            </p>
          </Link>
        </div>
        <div className="project-container">
          <Link to="/fp" target="_blank">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/SMWA/SMWA.png"
              alt="Student mental wellbeing application"
            />
          </Link>
        </div>
      </div>

      <div className="projects-container">
        <div className="project-container">
          <Link to="/smwa" className="project-link">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/SMWA/SMWA.png"
              alt="Student mental wellbeing application"
            />
            <h3>Student Mental Wellbeing Application</h3>
            <p>
              Designing the user experience of a student mental wellbeing
              application.
            </p>
          </Link>
        </div>
        <div className="project-container">
          <Link to="/fp" target="_blank">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/fp/fp%20-front.png"
              alt="FP CAPITAL"
            />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Projects;
