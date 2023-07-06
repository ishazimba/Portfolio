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
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/nc%20news/nc-api.png"
              alt="FP CAPITAL"
            />
            <h3>NC News API</h3>
            <p>
              A RESTful API designed to interact with a news database containing
              articles, topics, users, and comments.
            </p>
          </Link>
        </div>
        <div className="project-container">
          <Link to="/fp" target="_blank">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/nc%20news/nc-front-end.png"
              alt="Student mental wellbeing application"
            />
            <h3>NC News</h3>
            <p>
              A React application that provides users with a platform to view
              and interact with articles sourced from the NC News RESTful API.
            </p>
          </Link>
        </div>
      </div>

      <div className="projects-container">
        <div className="project-container">
          <Link to="/fp" target="_blank">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/airpark/airpark.png"
              alt="airpark"
            />
            <h3>AirPark</h3>
            <p>
              A mobile app that offers a seamless and convenient parking
              experience for the travelers.
            </p>
          </Link>
        </div>

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
