import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Smwa from "../pages/Smwa";
import Fp from "../pages/Fp";
import Tla from "../pages/Tla";
import NCNews from "../pages/NC-News";
import NCNewsFrontend from "../pages/NC-News-frontend";
import Skills from "../components/Skills";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import "./App.css";

const App = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`app ${isDarkMode ? "dark" : ""}`}>
      <Router>
        <ThemeProvider>
          <Navbar />
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

            <section id="contact">
              <Contact />
            </section>
          </main>
        </ThemeProvider>
      </Router>
    </div>
  );
};

export default App;
