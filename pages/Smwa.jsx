import React from "react";
import SmwaHeader from "../components/SmwaHeader";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import SmwaContent from "../components/SmwaContent";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Smwa = () => {
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
      <SmwaHeader /> {/* Update the subtitle */}
      <SmwaContent />
      <footer>
        <Contact />
      </footer>
    </main>
  );
};

export default Smwa;
