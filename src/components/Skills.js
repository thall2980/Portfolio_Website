import React from "react";
import logos from "./logos";

const Skills = () => {
  return (
    <div>
      <div className="text-center text-5xl pb-20">Skills</div>
      <div className="logo_container overflow-y-auto h-screen ">
        {logos.map((logo) => (
          <div key={logo.id} className="logo_title_container">
            <p>{logo.title}</p>
            <img src={logo.image} alt="" className="logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
