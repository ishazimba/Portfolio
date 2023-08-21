import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components"; // Import styled from styled-components

import backgroundImage from "../src/assets/herobg.jpg";

// Define a styled component with custom styles for desktop view
const DesktopImageContainer = styled.div`
  @media (min-width: 992px) {
    padding-top: 12rem;
  }
`;
const StyledButton = styled(Link)`
  width: 200px;
  background-color: #007e88;

  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #00a8d5;
  }
`;
const Container = styled.div`
  padding-bottom: 0; /* Default padding for mobile */
  padding-top: 5rem; /* Default padding for all views */

  @media (min-width: 992px) {
    padding-bottom: 9rem; /* Padding for desktop view */
  }
`;

const Header = () => {
  return (
    <header
      className="header_section custom-background"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "3rem 0",
      }}
    >
      <Container className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="hero-text pt-md-5">
              <h1
                className="text-white mb-3"
                style={{
                  paddingBottom: "1rem",
                  "@media (min-width: 992px)": "0.3rem",
                }}
              >
                Hi, I'm <span style={{ color: "#07E2F4" }}>Isha</span>
              </h1>
              <h3
                className="text-white mb-3"
                style={{
                  paddingBottom: "1.5rem",
                  "@media (min-width: 992px)": "0.5rem",
                }}
              >
                I develop user interfaces <br className="d-sm-block" /> and web
                applications
              </h3>
              <div
                className="text-center pt-4 pb-2"
                style={{
                  paddingRight: "20rem",
                  marginBottom: window.innerWidth >= 700 ? "0.5rem" : "10rem",
                }}
              >
                <StyledButton
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </StyledButton>
              </div>
            </div>
          </div>
          <DesktopImageContainer className="col-md-3">
            <div className="text-center">
              <img
                src="../src/assets/computer.png"
                alt="Project Image"
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                }}
              />
            </div>
          </DesktopImageContainer>
        </div>
      </Container>
    </header>
  );
};

export default Header;
