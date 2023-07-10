import React from "react";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NcNewsHeader from "../components/NcNewsHeader";
import NcNewsContent from "../components/NcNewsContent";
import AirparHeader from "../components/AirParkHeader";
import AirParkContent from "../components/AirparkContent";
import UweMapsHeader from "../components/UweMapsHeader";
import UweMapsContent from "../components/UweMapsContent";

const UWEMaps = () => {
  const { pathname } = useLocation();
  const handleLinkClick = (sectionId) => {
    const landingPageUrl = "/"; // Update this to the actual Landing page URL
    window.location.href = `${landingPageUrl}#${sectionId}`;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="mainContent px-0">
      <Navbar handleLinkClick={handleLinkClick} />
      <UweMapsHeader /> {/* Update the subtitle */}
      <UweMapsContent />
      <footer>
        <Contact />
      </footer>
    </main>
  );
};

export default UWEMaps;
