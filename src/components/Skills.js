import React from "react";
import logos from "./logos";

const Skills = () => {
  return (
    <>
      <div>Skills</div>
      {logos.map((logo) => (
        <div key={logo.id}>
          <img src={logo.image} alt="" />
          <p>{logo.title}</p>
        </div>
      ))}
    </>
  );
};

export default Skills;
