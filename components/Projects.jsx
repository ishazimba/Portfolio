import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { styles } from "../src/styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../src/utils/motion";
import { projects } from "../src/constants";
import { SectionWrapper } from "../src/hoc";
import { Tilt } from "react-tilt";

const ProjectCard = ({ idname, index, name, description, tags, image }) => {
  const tiltStyles = {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "1rem",
    backgroundColor: "var(--tertiary-color)",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  };

  const imageStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "1rem",
  };

  return (
    <motion.div className="col-lg- col-md-6 col-sm-12 mb-4">
      <Link to={`/${idname}`} style={{ textDecoration: "none" }}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          style={tiltStyles}
        >
          <div className="position-relative w-full h-50">
            <img src={image} alt="project_image" style={imageStyles} />
          </div>

          <div className="mt-3">
            <h3 className="text-white font-weight-bold text-24px">{name}</h3>
            <p className="mt-2 text-gray-600 text-14px">{description}</p>
          </div>

          <div className="mt-3 d-flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-14px ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </Link>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>My work so far</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-100">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-17 max-w-3xl lead-lg"
        >
          Following projects highlight my skills, experience, and
          problem-solving prowess. They showcase my proficiency in diverse
          technologies and effective project management.
        </motion.p>
        <div className="mt-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 gap-6 justify-content-center">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "");
