import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-arrow-left" onClick={onClick}>
      <IoIosArrowBack size={40} />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-arrow-right" onClick={onClick}>
      <IoIosArrowForward size={40} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // Set autoplay speed in milliseconds
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <main id="skills">
      <h2>Skills</h2>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/react.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/js.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/node.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/vite.svg"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/html.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/css.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/git.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/Expressjs.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/npm.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/figma.svg"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/elephantsql.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/bootstrap.png"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </main>
  );
};

export default Skills;
