import React from "react";

const NcApiContent = () => {
  return (
    <section className="content">
      <h2>Project Overview </h2>

      <div class="project-container-new">
        <img
          className="project-content-image"
          src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/nc%20news/nc-api.png"
          alt="NC API"
        />
        <div class="project-content">
          <div class="project-text">
            <p>
              The NC News API is a RESTful API designed to interact with a news
              database containing articles, topics, users, and comments. Built
              using Express.js and PostgreSQL, this API offers a wide range of
              endpoints to retrieve and modify data from the news database. The
              project follows a Test-Driven Development (TDD) approach, ensuring
              the reliability and robustness of the API's functionality.
            </p>
          </div>
        </div>
      </div>
      <h2>Deployment and Hosting</h2>
      <div class="project-container-new">
        <div class="project-content">
          <div class="project-text">
            <p>
              The NC News API is hosted on Render, providing a stable and secure
              environment for accessing the news database. By leveraging
              Render's platform, the API ensures high availability and
              reliability, allowing users to access news articles and related
              information seamlessly.{" "}
            </p>
          </div>
        </div>
      </div>
      <h2>Testing</h2>
      <div class="project-container-new">
        <div class="project-content">
          <div class="project-text">
            <p>
              The project utilizes Jest, a popular JavaScript testing framework,
              to ensure the quality and correctness of the API's functionality.
              By employing Test-Driven Development (TDD), the API is thoroughly
              tested to identify and address any potential issues, resulting in
              a robust and stable system.{" "}
            </p>
          </div>
        </div>
      </div>
      <h2>Technologies Used</h2>
      <div class="project-container-new">
        <div class="project-content">
          <div class="project-text">
            <ol>
              <li>
                Express.js: A fast and minimalist web application framework for
                Node.js, providing a solid foundation for building RESTful APIs.
              </li>
              <li>
                PostgreSQL: A powerful open-source relational database
                management system, chosen for its reliability and scalability.
              </li>
              <li>
                Node.js: A JavaScript runtime environment that allows for
                server-side execution of JavaScript code, facilitating the
                development of scalable and efficient web applications.
              </li>
              <li>
                Jest: A popular JavaScript testing framework that provides a
                comprehensive suite of testing tools, enabling developers to
                write automated tests and ensure code quality.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <h2>Demo</h2>
      <div class="project-container-new">
        <div class="project-content">
          <div class="project-text">
            <p>
              GitHub Link:
              <a href="https://github.com/ishazimba/NC-News" target="_blank">
                {" "}
                Github link
              </a>
            </p>
            <br />
            <p>
              Link to Live version (add available endpoints):
              <a href="https://nc-news-7v3f.onrender.com/" target="_blank">
                {" "}
                Live Demo
              </a>
            </p>
            <br />

            <p>Available endpoints</p>
            <ul>
              <li>GET /api</li>
              <li>GET /api/topics</li>
              <li>GET /api/articles</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NcApiContent;
