import React from "react";

const About = () => {
  return (
    <section className="about bg-blue-500 text-white py-5 about-mobile">
      <h2>About Me</h2>
      <div className="about-container">
        <img
          src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/pic.JPG"
          alt="profile picture"
          className="max-w-300 mx-auto mb-4 sm:max-w-500 sm:mr-7 sm:mb-0"
        />
        <div className="about-text ">
          <p>
            Hello! 👋 I'm Isha, a Software Engineer and UI/UX designer with a
            passion for creating beautiful and functional digital experiences. I
            hold a MSc.IT degree and recently completed an intensive software
            engineering bootcamp, where I honed my skills in full-stack
            development.
          </p>
          <br />
          <p>
            My journey in technology started during my university studies, where
            I delved into the world of coding and discovered my love for
            problem-solving. I was fascinated by the endless possibilities of
            building innovative solutions using code. This led me to pursue a
            software engineering bootcamp, where I aimed to gain confidence and
            sharpen my skills in JavaScript, the primary language used
            throughout the program.
          </p>
          <br />
          <p>
            During the bootcamp, I embraced a collaborative and agile approach
            to development. I had the opportunity to work on exciting projects,
            both individually and as part of a team. One of the highlights was a
            full-stack group project, where we leveraged the power of
            TypeScript, React, and Node.js to create a robust and scalable
            application. Additionally, I explored React Native for a mobile app
            project and even dabbled in Flutter SDK during my final master's
            dissertation project, expanding my horizons and staying up-to-date
            with emerging technologies.
          </p>
          <br />
          <p>
            Beyond my technical pursuits, I find inspiration in art, painting,
            and photography. These creative outlets enhance my design
            sensibilities and allow me to bring unique perspectives to my work.
            As someone with a diverse background and origins from Nepal, I value
            diversity and inclusivity in all aspects of life and strive to
            incorporate these principles into my projects.
          </p>
          <br />
          <p>
            Feel free to explore my portfolio, where you can find examples of my
            design work and projects. I'm always eager to take on new
            opportunities and collaborate on meaningful projects. If you have
            any exciting ventures or creative ideas you'd like to discuss, don't
            hesitate to reach out. Let's bring your vision to life together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
