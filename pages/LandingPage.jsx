import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Smwa from "../pages/Smwa";

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
      <main className="mainContent">
        <section id="home">
          <Header />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="about">
          <About />
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