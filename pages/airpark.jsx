import React from "react";
import Navbar from "../components/Navbar";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AirparHeader from "../components/AirParkHeader";
import AirParkContent from "../components/AirparkContent";
import { projects } from "../src/constants";

const AirPark = () => {
  const { pathname } = useLocation();
  const handleLinkClick = (sectionId) => {
    const landingPageUrl = "/";
    window.location.href = `${landingPageUrl}#${sectionId}`;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="mainContent px-0">
      <Navbar handleLinkClick={handleLinkClick} />
      <AirparHeader />
      <AirParkContent />
    </main>
  );
};

export default AirPark;
