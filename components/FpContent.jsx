import React from "react";

const FpContent = () => {
  return (
    <section className="content">
      <h2>Project Overview </h2>

      <div class="project-container-new">
        <div class="project-content">
          <div class="project-text">
            <p>
              The Freeley Palmer Finance Company project aimed to design a user
              experience (UX) for their application, which focused on
              independently managed future-focused investment solutions. The
              objective was to create a user-friendly and engaging platform that
              aligned with the company's vision and met the needs of its target
              audience. As the UX designer for this project, my responsibility
              was to craft intuitive and visually appealing designs that would
              enhance the user's interaction with the application.
            </p>
          </div>
        </div>
      </div>
      <h2>Design Process and Approach</h2>
      <div class="project-container-new">
        <div class="project-content">
          <div class="project-text">
            <p>
              The design process followed a structured approach to ensure a
              successful outcome:
            </p>
            <ul>
              <li>
                Understanding Stakeholder Requirements: Close collaboration with
                stakeholders and product owners was crucial to gain a deep
                understanding of their objectives, target audience, and specific
                requirements. This phase involved conducting comprehensive
                discussions and gathering detailed insights to align the design
                process with their goals.
              </li>
              <li>
                Ideation and Wireframing: Based on the gathered information, the
                design process commenced by creating wireframes that outlined
                the application's layout and structure. These wireframes served
                as the foundation for visualizing the overall user flow and
                interaction design.
              </li>
              <li>
                Iterative Prototyping: The design was refined through an
                iterative prototyping process. Low, medium, and high fidelity
                prototypes were developed using the Figma tool, allowing for
                continuous improvement based on stakeholder feedback. This
                iterative approach enabled the exploration of various design
                solutions and ensured that the final design would provide a
                seamless and intuitive user experience.
              </li>
              <li>
                Stakeholder Collaboration: Regular meetings and design reviews
                were conducted to present the evolving prototypes and gather
                valuable feedback from stakeholders. This collaborative approach
                facilitated open communication, ensuring that the design met
                stakeholder expectations and aligned with their vision.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Design Implementation</h2>
      <div class="project-container-new">
        <div class="project-content">
          <div class="project-text">
            <p>
              During the implementation phase, close collaboration with the
              development team was maintained to ensure a smooth transition from
              design to a functional application. Key aspects of the design
              implementation process included:
            </p>
            <ul>
              <li>
                Communication and Support: Continuous communication with the
                development team was maintained to provide clarifications,
                address design-related queries, and offer guidance throughout
                the implementation phase. This collaboration ensured that the
                design intent was accurately translated into the final product.
              </li>
              <li>
                Design QA and Testing: Working closely with the development
                team, design quality assurance (QA) and testing activities were
                conducted to identify and resolve any design-related issues or
                inconsistencies. This phase aimed to ensure that the application
                functioned as intended and provided a seamless user experience.
              </li>
              <li>
                Iterative Improvements: Feedback from the development team,
                stakeholders, and user testing was collected and analyzed to
                identify areas for improvement. Iterative design refinements
                were made to enhance the application's usability, accessibility,
                and overall user experience.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h2>Project Highlights</h2>
      <div class="project-container-new">
        <video
          className="project-content-image"
          src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/fp-vid.mov"
          controls
        ></video>
        <br />
        <div class="project-content">
          <div class="project-text">
            <p>
              The Freeley Palmer Finance Company project demonstrated the
              ability to transform stakeholder requirements into an engaging and
              user-centered design. By following a structured design process,
              collaborating closely with stakeholders, and iteratively refining
              the prototypes, a well-crafted UX was achieved. The implementation
              phase emphasized effective communication with the development
              team, rigorous QA and testing, and continuous improvements to
              deliver a high-quality and user-friendly application. This project
              showcases expertise in understanding stakeholder needs, ideation,
              prototyping, stakeholder collaboration, and successful design
              implementation.
            </p>
          </div>
        </div>
      </div>

      <h2>Demo</h2>
      <div class="project-container-new">
        <div class="project-content">
          <div class="project-text">
            <video
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/fpvideo.mov"
              controls
              class="project-video"
            ></video>

            <br />

            <a
              class="link"
              href="https://www.figma.com/proto/Q0fUVKI71ivioAX3P43HnB/Untitled?type=design&node-id=2-6&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A6&mode=design"
              target="_blank"
            >
              <p>Prototype Link</p>
            </a>

            <a class="link" href="https://freeleypalmer.co.uk/" target="_blank">
              {" "}
              <p>Freeley Palmer</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FpContent;
