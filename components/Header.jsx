import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  padding-bottom: 1rem;
  padding-top: 3rem;
  text-align: center;

  @media (min-width: 992px) {
    padding-bottom: 5rem;
    padding-top: 10rem;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const Intro = styled.div`
  flex: 1;

  padding-top: 6rem;
  text-align: left;
  padding-bottom: 10px;
  padding-left: 1rem;

  @media (min-width: 992px) {
    flex: 1;
    text-align: left;
    padding-left: 3.5rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 10px;

  @media (min-width: 992px) {
    flex: 1;
    justify-content: center;
    align-items: center;
  }
`;

const Header = () => {
  return (
    <Container className="container">
      <Row>
        <Intro>
          <div className="intro text-left p-16">
            <h1
              className="text-white mb-2"
              style={{
                paddingBottom: "1rem",
                fontWeight: "bold",
              }}
            >
              Hi! I'm <span style={{ color: "#07E2F4" }}>Isha. </span>
            </h1>

            <h1
              className="text-white mb-2"
              style={{
                paddingBottom: "1rem",
                fontWeight: "bold",
              }}
            ></h1>
            <h3 className="text-white mb-3">
              I develop user interfaces <br className="d-sm-block" /> and web
              applications
            </h3>
          </div>
        </Intro>
        <ImageContainer>
          <img
            src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/profilepic_isha.png"
            alt="profile pic"
            style={{
              maxWidth: "60%",
            }}
            loading="lazy"
          />
        </ImageContainer>
      </Row>
    </Container>
  );
};

export default Header;
