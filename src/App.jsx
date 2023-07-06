import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Smwa from "../pages/Smwa";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import LandingPage from "../pages/LandingPage";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar /> {/* Include the Navbar component */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/smwa" element={<Smwa />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
