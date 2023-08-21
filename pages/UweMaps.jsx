import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import UweMapsHeader from "../components/UweMapsHeader";
import UweMapsContent from "../components/UweMapsContent";

const UWEMaps = () => {
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
      <UweMapsHeader />
      <UweMapsContent />
    
    </main>
  );
};

export default UWEMaps;
