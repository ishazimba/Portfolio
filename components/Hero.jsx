import React from "react";
import { motion } from "framer-motion";

import ComputersCanvas from "./canvas/Computers";

const Hero = () => {
  return (
    <section className="bg-dark text-white min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-start align-items-center gap-5">
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center mt-5">
              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center p-3">
                {/* Add your content here */}
              </div>
              <div
                className="bg-gradient-secondary w-100 mt-3"
                style={{ height: "80px" }}
              ></div>
            </div>
          </div>

          <div className="col-md-8">
            <h1 className="display-4">
              Hi, I'm <span className="text-primary">Isha</span>
            </h1>
            <p className="lead mt-2">
              I develop user interfaces <br className="d-sm-block d-none" />
              and web applications
            </p>
          </div>
        </div>

        <ComputersCanvas />

        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
          <a href="#about">
            <div className="bg-light rounded-circle d-flex align-items-center justify-content-center p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="bg-secondary rounded-circle"
                style={{ width: "1rem", height: "1rem" }}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
