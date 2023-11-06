import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../src/styles";
import { services } from "../src/constants";
import { fadeIn, textVariant } from "../src/utils/motion";
import { SectionWrapper } from "../src/hoc";

const ServiceCard = ({ index, title, icon }) => (
  <div className="col-xs-4 col-md-3 col-lg-2 my-3">
    <Tilt className="tilt">
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className=" rounded p-3 service-card"
        style={{
          backgroundColor: "#eefeff",
          border: "5px solid var(--tertiary-color)",
          flexBasis: "100%",
          margin: "0.8rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <motion.div
          options={{
            max: 20,
            scale: 1,
            speed: 200,
          }}
          className="bg-tertiary  py-1 px-0.5  d-flex justify-content-center align-items-center"
          style={{ flex: "1" }}
        >
          <img
            src={icon}
            alt="web-development"
            style={{
              width: "80%",
              height: "auto",
            }}
            className="mb-1"
          />
        </motion.div>

        <h3
          className="text-(--tertiary-color) text-center mb-2"
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          {title}
        </h3>
      </motion.div>
    </Tilt>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}> About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-17 max-w-3xl lead-lg"
      >
        I am a Frontend Developer with proven experience in the latest
        JavaScript stack, including React, TypeScript, Redux, and Next.js. I
        have a track record of working effectively in remote agile teams and I
        am committed to creating cutting-edge web applications in fully remote
        roles. My strength is building scalable, maintainable, and performant
        web applications.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Two milestones I am most proud of in my career are, having delivered
        over 5+ enterprise-level projects at FX Pro Design, under extremely
        tight deadlines and improving one client’s application performance by
        over 50% on key pages, leading to a steep increase in conversions during
        my time as a freelance.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Motivated by my passion for building user-friendly web interfaces that
        seamlessly integrate design and functionality, I chose to specialise as
        a Frontend Developer. After successfully graduating in Information
        Technology, I started my developer journey at FX Pro Design as a
        Frontend Developer and Designer, with a strong focus on the JavaScript
        ecosystem. I am looking for an Agile organisation where I can use my
        expertise to create exceptional user interfaces and web applications.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        💻 <strong>Programming Languages:</strong> JavaScript, TypeScript
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        🔧 <strong>Technologies & Tools:</strong> React, Redux, HTML5 & CSS,
        Node.js, Express.js, Responsive Web Design, Webpack, E2E testing
        (TestCafe, Cypress), Unit Testing (Jest, React Testing Library), REST
        APIs
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        ☁️ <strong>Cloud:</strong> CI/CD, Git, AWS S3, AWS EC2, AWS RDS
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        📊 <strong>Methodologies:</strong> SCRUM, Agile, TDD
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        🤔 <strong>Interests:</strong> Frontend Development, UX Design, Web
        Performance
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        🎉 <strong>Personal Interests:</strong> In my spare time, I like to
        pursue my passion for art and painting, read about new technologies and
        jog around the city.
      </motion.p>

      <div className="mt-4 row row-cols-2 row-cols-md-3 row-cols-lg-4 gap-6 justify-content-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
