import React from "react";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NcNewsHeader from "../components/NcNewsHeader";
import NcNewsContent from "../components/NcNewsContent";
import AirparHeader from "../components/AirParkHeader";
import AirParkContent from "../components/AirparkContent";

const AirPark = () => {
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
      <AirparHeader /> {/* Update the subtitle */}
      <AirParkContent />
      <footer>
        <Contact />
      </footer>
    </div>
  );
};

export default AirPark;
