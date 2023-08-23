import React from "react";
import Navbar from "../components/Navbar";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FpHeader from "../components/FpHeader";
import FpContent from "../components/FpContent";
import { useParams } from "react-router-dom";

const Fp = () => {
  const { name } = useParams();
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
      <FpHeader />
      <FpContent />
    </main>
  );
};

export default Fp;
