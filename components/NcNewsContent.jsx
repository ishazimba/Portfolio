import React from "react";

const NcNewsContent = () => {
  return (
    <section className="content">
      <h2>Project Overview </h2>

      <div class="project-container-new">
        <div class="project-content">
          <div class="project-text">
            <p>
              I developed a React application that provides users with a
              platform to view and interact with articles sourced from the NC
              News RESTful API. This project was part of my bootcamp experience,
              where I followed the Agile methodology and collaborated with
              mentors to ensure code quality and best practices.
            </p>
          </div>
        </div>
      </div>
      <h2>Key Features</h2>
      <div class="project-container-new">
        <div class="project-content">
          <div class="project-text">
            <ul>
              <li>
                Browsing Articles: Users can explore a list of articles fetched
                from the NC News API. The articles are displayed in a visually
                appealing and user-friendly manner.
              </li>
              <li>
                Individual Article View: Each article has its own dedicated page
                where users can read the full content and access additional
                details, such as the author, publication date, and number of
                comments.
              </li>
              <li>
                Comments Section: Users can view and engage with the comments
                associated with an article. They can read existing comments,
                upvote or downvote them, and even add their own comments to
                contribute to the discussion.
              </li>
              <li>
                Voting System: Users have the ability to express their opinion
                on articles by upvoting or downvoting them. This feature adds
                interactivity and allows users to influence the popularity and
                visibility of articles.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h2>Process</h2>
      <div class="project-container-new">
        <div class="project-content">
          <div class="project-text">
            <p>
              I followed the Agile methodology throughout the development
              process, breaking down the project into manageable tasks
              represented as tickets. For each ticket, I created a corresponding
              branch and worked on the feature or bug fix. Once completed, I
              submitted a pull request for code review by a mentor. This ensured
              code quality, adherence to best practices, and provided valuable
              feedback for improvement.
            </p>
          </div>
        </div>
      </div>
      <h2>Technologies Used</h2>
      <div class="project-container-new">
        <div class="project-content">
          <div class="project-text">
            <ul>
              <li>
                React: I utilized the React framework to build the user
                interface, enabling a dynamic and interactive experience for the
                users.
              </li>
              <li>
                NC News API: I integrated the RESTful API I had previously
                developed, allowing the application to fetch and render data
                from the backend.
              </li>
              <li>
                Git: I used Git as a version control system to manage the
                project's source code, branching, and pull requests during
                collaboration.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Demo</h2>
      <div class="project-container-new">
        <div class="project-content">
          <div class="project-text">
            <video
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/nc%20news/videodemo.mov"
              controls
              class="project-video"
            ></video>

            <br />
            <p>
              GitHub Link:
              <a href="https://github.com/ishazimba/FE-NC-News" target="_blank">
                {" "}
                NC News
              </a>
            </p>

            <p>
              This project showcases my ability to work with React, consume
              RESTful APIs, implement essential features like commenting and
              voting, and collaborate effectively following the Agile
              methodology. It demonstrates my dedication to delivering
              high-quality code and my understanding of user-centric development
              principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NcNewsContent;
