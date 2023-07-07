import React from "react";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import FpHeader from "../components/FpHeader";
import FpContent from "../components/FpContent";

const Fp = () => {
  const { pathname } = useLocation();
  const handleLinkClick = (sectionId) => {
    const landingPageUrl = "/"; // Update this to the actual Landing page URL
    window.location.href = `${landingPageUrl}#${sectionId}`;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="project-content-page">
      <Navbar handleLinkClick={handleLinkClick} />
      <FpHeader /> {/* Update the subtitle */}
      <FpContent />
      <footer>
        <Contact />
      </footer>
    </div>
  );
};

export default Fp;
