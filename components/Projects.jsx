// Projects.jsx
import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <main id="projects">
      <h1>Portfolio</h1>
      <h2>Software Development Projects</h2>
      <div class="project-container">
        <div class="project">
          <a href="fe-nc-news.html" target="_blank">
            <div class="project-info">
              <h3>NC NEWS</h3>
              <div class="desktop-images">
                <img
                  src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/fe1.png"
                  alt="image"
                  class="fe-image"
                />
              </div>
            </div>
          </a>
        </div>
        <div class="project">
          <a href="airpark.html" target="_blank">
            <div class="project-info">
              <h3>AirPark</h3>
              <div class="mobile-images">
                <img
                  src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/airpark.png"
                  alt="image"
                  class="fe-image"
                />
              </div>
            </div>
          </a>
        </div>
        <div class="project">
          <a href="fe-nc-news.html" target="_blank">
            <div class="project-info">
              <h3>UWE MAPS</h3>
              <div class="desktop-images">
                <img
                  src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/fe1.png"
                  alt="image"
                  class="fe-image"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
      <h2>UI/UX Design Projects</h2>
      <div class="project-container">
        <div class="project">
          <a href="smwa.html" target="_blank">
            <div id="smwa">
              <h3>Student Mental Wellbeing Application (SMWA)</h3>
              <div class="mobile-images">
                <img
                  src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/SMWA/splash.png"
                  alt="Student mental wellbeing application"
                />
              </div>
            </div>
          </a>
        </div>
        <div class="project">
          <a href="fp.html" target="_blank">
            <div class="project-info">
              <h3>Freeley Palmer</h3>
              <div class="desktop-images">
                <img
                  src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/FP-LOGIN.png"
                  alt="FP CAPITAL"
                />
              </div>
            </div>
          </a>
        </div>
        <div class="project">
          <a href="tla.html" target="_blank">
            <div class="project-info">
              <h3>The Linear Academy</h3>
              <div class="desktop-images">
                <img
                  src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/TLA.png"
                  alt="TLA"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Projects;
