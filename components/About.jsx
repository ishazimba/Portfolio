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
            Hello! 👋 I'm Isha, a passionate Software Engineer and UI/UX
            designer based in Bristol, UK. I specialize in creating visually
            appealing and user-friendly digital experiences, bringing expertise
            in designing intuitive user interfaces and developing seamless
            frontend solutions. With a Master's degree in Information Technology
            and recent completion of an intensive software engineering bootcamp,
            I have honed my skills in full-stack development.
          </p>
          <br />

          <p>
            Throughout the bootcamp, I enthusiastically embraced a collaborative
            and agile approach to development. I had the privilege of working on
            exciting projects both independently and as part of a team. One
            standout experience was a full-stack group project, where we
            harnessed the power of TypeScript, React Native, and Node.js to
            craft a robust and scalable application. Additionally, during my
            final master's dissertation project, I explored the Flutter SDK,
            ensuring I stay up-to-date with emerging technologies.
          </p>
          <br />
          <p>
            When it comes to my design work, I prioritize a user-centered
            approach. I meticulously conduct comprehensive research,
            wireframing, and prototyping to guarantee optimal usability and
            delightful interactions. Implementing responsive design principles,
            optimizing performance, and overcoming complex frontend challenges
            using HTML, CSS, and JavaScript, including frameworks like React,
            are among my successful achievements.
          </p>
          <br />
          <p>
            Beyond my technical pursuits, I draw inspiration from art, painting,
            and photography. These creative outlets enrich my design
            sensibilities and enable me to infuse unique perspectives into my
            work. Being someone with a diverse background and hailing from
            Nepal, I hold a deep appreciation for diversity and inclusivity,
            which I actively incorporate into my projects.
          </p>
          <br />
          <p>
            Please feel free to explore my portfolio, where you can find
            examples of my projects. I'm always enthusiastic about taking on new
            opportunities and collaborating on meaningful endeavors. If you have
            any exciting ventures or creative ideas you'd like to discuss, don't
            hesitate to reach out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
