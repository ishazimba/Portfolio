import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Smwa from "../pages/Smwa";
import LandingPage from "../pages/LandingPage";
import NcApi from "../pages/NC-Api";
import NCNews from "../pages/NC-News";
import AirPark from "../pages/airpark";
import UWEMaps from "../pages/UweMaps";
import Fp from "../pages/Fp";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/smwa" element={<Smwa />} />
          <Route path="/ncapi" element={<NcApi />} />
          <Route path="/ncnews" element={<NCNews />} />
          <Route path="/airpark" element={<AirPark />} />
          <Route path="/uwemaps" element={<UWEMaps />} />
          <Route path="/fp" element={<Fp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
