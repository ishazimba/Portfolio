import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../src/styles";
import { services } from "../src/constants";
import { fadeIn, textVariant } from "../src/utils/motion";
import { SectionWrapper } from "../src/hoc";

const ServiceCard = ({ index, title, icon }) => (
  <div className="col-xs-6 col-md-4 col-lg-3">
    <Tilt className="tilt">
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className=" rounded p-4 service-card"
        style={{
          backgroundColor: "var(--tertiary-color)",
          flexBasis: "100%",
          margin: "1rem",
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
          className="bg-tertiary rounded-20 py-3 px-3 d-flex justify-content-center align-items-center"
          style={{ flex: "1" }}
        >
          <img
            src={icon}
            alt="web-development"
            style={{
              width: "50%",
              height: "auto",
            }}
            className="mb-4"
          />
        </motion.div>

        <h3
          className="text-white text-center mb-2"
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
        <p className={styles.sectionSubText}>Get to know me</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-17 max-w-3xl lead-lg"
      >
        Hello! 👋 I'm Isha, a passionate Software Developer based in Bristol,
        UK. I specialize in creating visually appealing and user-friendly
        digital experiences, bringing expertise in designing intuitive user
        interfaces and developing seamless frontend solutions. With a Master's
        degree in Information Technology and recent completion of an intensive
        software engineering bootcamp, I have honed my skills in full-stack
        development.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My collaborative spirit shines through agile practices embraced during
        the bootcamp. I had the privilege of working on exciting projects both
        independently and as part of a team. One standout experience was a
        full-stack group project, where we harnessed the power of TypeScript,
        React Native, and Node.js to craft a robust and scalable application. My
        master's research delved into Flutter, showcasing my adaptability to
        emerging technologies.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        When it comes to my design work, I prioritize a user-centered approach.
        I meticulously conduct comprehensive research, wireframing, and
        prototyping to guarantee optimal usability and delightful interactions.
        Implementing responsive design principles, optimizing performance, and
        overcoming complex frontend challenges using HTML, CSS, and JavaScript,
        including frameworks like React, are among my successful achievements.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Beyond my technical pursuits, I draw inspiration from art, painting, and
        photography. These creative outlets enrich my design sensibilities and
        enable me to infuse unique perspectives into my work. Being someone with
        a diverse background and hailing from Nepal, I hold a deep appreciation
        for diversity and inclusivity, which I actively incorporate into my
        projects.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As I explore new opportunities, I'm eager to contribute my expertise.
        Let's connect and collaborate!
      </motion.p>

      <div className="mt-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 gap-6 justify-content-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
