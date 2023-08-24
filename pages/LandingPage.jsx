import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header from "../components/Header";

import Skills from "../components/Skills";
import Tech from "../components/Tech";
import StarsCanvas from "../components/canvas/Stars";

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    const section = new URLSearchParams(location.search).get("section");
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <main className="mainContent px-0">
        <section id="home">
          <Header />
        </section>
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>
      </main>
      <footer>
        <section id="contact">
          <Contact />
        </section>
      </footer>
    </>
  );
};

export default LandingPage;
