import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import backgroundImage from "../src/assets/herobg.jpg";

const DesktopImageContainer = styled.div`
  @media (minwidth: 992px) {
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
  padding-bottom: 0;
  padding-top: 5rem;

  @media (minwidth: 992px) {
    padding-bottom: 9rem;
  }
`;

const Header = () => {
  const [bgLoaded, setBgLoaded] = useState(false);
  useEffect(() => {
    const bgImage = new Image();
    bgImage.src = backgroundImage;
    bgImage.onload = () => {
      setBgLoaded(true);
    };
  }, []);
  return (
    <>
      <header
        className={`header_section custom-background ${
          bgLoaded ? "loaded" : ""
        }`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "4rem 0",
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
                    "@media (minWidth: 992px)": "0.3rem",
                    fontWeight: "bold",
                  }}
                >
                  Hi, I'm <span style={{ color: "#07E2F4" }}>Isha</span>
                </h1>
                <h3
                  className="text-white mb-3"
                  style={{
                    paddingBottom: "2.5rem",

                    "@media (minWidth: 992px)": "0.5rem",
                  }}
                >
                  I develop user interfaces <br className="d-sm-block" /> and
                  web applications
                </h3>
                <div
                  className="text-center pt-4 pb-2"
                  style={{
                    paddingRight: "20rem",

                    marginBottom: window.innerWidth >= 992 ? "10rem" : "1rem",
                  }}
                >
                  <StyledButton
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}
                  >
                    Get in Touch
                  </StyledButton>
                </div>
              </div>
            </div>
            <DesktopImageContainer className="col-md-5">
              <div className="text-center">
                <img
                  src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/desktop.png"
                  alt="Project Image"
                  className="img-fluid"
                  style={{
                    maxWidth: "100%",

                    "@media (minWidth: 992px)": "50%",
                  }}
                  loading="lazy"
                />
              </div>
            </DesktopImageContainer>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
