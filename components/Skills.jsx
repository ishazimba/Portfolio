import React, { useRef } from "react";
import "uikit/dist/css/uikit.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Skills = () => {
  const sliderRef = useRef(null);

  const slideToLeft = () => {
    sliderRef.current.slickPrev();
  };

  const slideToRight = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 6,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div
        className="slider-container"
        style={{
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          marginBottom: "100px",
        }}
      >
        <div
          className="arrow left-arrow"
          onClick={slideToLeft}
          style={{ marginLeft: "40px" }}
        >
          <IoIosArrowBack size={32} />
        </div>
        <Slider {...settings} ref={sliderRef} className="slider-with-border">
          <div className="skills-icon">
            <img src="/images/react.png" alt="react" className="icon" />
          </div>
          <div className="skills-icon">
            <img src="/images/js.png" alt="js" className="icon" />
          </div>
          <div className="skills-icon">
            <img src="/images/node.png" alt="node" className="icon" />
          </div>
          <div className="skills-icon">
            <img src="/images/vite.svg" alt="vite" className="icon" />
          </div>
          <div className="skills-icon">
            <img src="/images/html.png" alt="html" className="icon" />
          </div>
          <div className="skills-icon">
            <img src="/images/css.png" alt="css" className="icon" />
          </div>
          <div className="skills-icon">
            <img src="/images/git.png" alt="git" className="icon" />
          </div>
          <div className="skills-icon">
            <img src="/images/Expressjs.png" alt="express" className="icon" />
          </div>
          <div className="skills-icon">
            <img src="/images/npm.png" alt="npm" className="icon" />
          </div>
          <div className="skills-icon">
            <img src="/images/figma.svg" alt="figma" className="icon" />
          </div>
          <div className="skills-icon">
            <img
              src="/images/elephantsql.png"
              alt="elephantsql"
              className="icon"
            />
          </div>
          <div className="skills-icon">
            <img src="/images/bootstrap.png" alt="bootstrap" className="icon" />
          </div>
        </Slider>
        <div
          className="arrow right-arrow"
          onClick={slideToRight}
          style={{ marginRight: "40px" }}
        >
          <IoIosArrowForward size={32} />
        </div>
      </div>
    </div>
  );
};
export default Skills;
