import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tech from "./Tech";

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
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 1500,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <main id="skills" style={{ backgroundColor: "white" }}>
      <h2>Tech Stack</h2>
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
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/express.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/jest.png"
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
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/tailwind.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/bootstrap.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/expo.png"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/ishazimba/Portfolio/main/images/axios.png"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </main>
  );
};

export default Skills;
