import React from "react";

import BallCanvas from "./canvas/Ball";
import { SectionWrapper } from "../src/hoc";
import { technologies } from "../src/constants";

const Tech = () => {
  return (
    <div
      className="flex flex-row justify-center gap-10"
      style={{ display: "flex", flexDirection: "row" }}
    >
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
