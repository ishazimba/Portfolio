import React from "react";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";

const FpHeader = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const Container = styled.div`
    padding-bottom: 0;
    padding-top: 5rem;

    @media (min-width: 992px) {
      padding-bottom: 9rem; /* Padding for desktop view */
    }
  `;

  return (
    <>
      <header
        className="header_section "
        style={{
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "2rem 0",
        }}
      >
        <Container className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hero-text pt-md-5">
                <h1
                  className="text-white mb-3"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Freeley Palmer
                </h1>
                <h3 className="text-white mb-3" style={{}}>
                  Designing the User Interface of a Finance Company
                </h3>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="text-center pt-4 pb-2"
                style={{
                  marginBottom: window.innerWidth >= 700 ? "0.5rem" : "10rem",
                }}
              >
                <img
                  className="project-content-image"
                  src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/fp/fp-image.png"
                  alt="fp capital"
                />
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default FpHeader;
