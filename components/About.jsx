import React from "react";

const About = () => {
  return (
    <section className="about bg-blue-500 text-white py-5">
      <h2>About Me</h2>
      <div className="about-container">
        <img
          src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/pic.JPG"
          alt="profile picture"
          className="max-w-300 mx-auto mb-4 sm:max-w-500 sm:mr-7 sm:mb-0"
        />
        <div className="about-text px-5 sm:px-0">
          <p>
            Hello, I'm Isha, a UI/UX designer with a MSc.IT from University of
            the West of England (UWE), Bristol and a recent graduate of a
            software engineering bootcamp. With a few months of experience in
            UI/UX design, I have a solid foundation in front-end and back-end
            development, including JavaScript, HTML, CSS, and RESTful APIs. I am
            proficient in using tools like Figma for designing wireframes and
            prototypes, and have worked with technologies like React, Node.js,
            Express, PostgreSQL for creating a fullstack application.
          </p>
          <p>
            During my bootcamp, I gained practical experience in working with a
            Test-Driven Development (TDD) approach and following Agile
            methodologies. I also have experience collaborating in pair
            programming and group projects, both in academic and professional
            settings.
          </p>
          <p>
            Beyond my technical skills, I am interested in art, painting, and
            photography, which influences my creative approach to design.
            Originally from Nepal and currently residing in Bristol, UK, I bring
            a diverse perspective to my work.
          </p>
          <p>
            I invite you to explore my portfolio, where you can see examples of
            my design work and projects. Feel free to reach out to me for any
            opportunities or collaborations. I'm excited to contribute my skills
            and creativity to meaningful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
