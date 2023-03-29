import React from "react";
import image from "../img/About_Background.jpg";

const AboutMe = () => {
  return (
    <div
      // style={{ backgroundImage: `url(${image})` }}
      className="flex flex-row px-20 pt-20 h-screen bg-cover bg-no-repeat"
    >
      <div className="w-1/2">
        <h1 className="text-7xl text-gray-400">Tyler Hall</h1>
        <h2 className="pt-6 text-5xl text-gray-400">
          Full Stack Web Developer
        </h2>
      </div>
      <div className="w-1/2">
        <p className="mt-7 text-2xl text-center text-gray-400 ">
          Hello there! My name is Tyler Hall, and I am a Full Stack Web
          Developer based in Pittsburgh, PA. Before entering the tech world, I
          attended the University of Pittsburgh and earned a Bachelor of Science
          degree in Biological Sciences. I also worked as a Patient Care
          Technician at the University of Pittsburgh Medical Center Presbyterian
          Hospital on a physical rehbailition unit. After realizing my true
          passion for programming and web development, I attended the Flatiron
          School Software Engineering program where I honed my skills in Ruby on
          Rails and React.js programming. The fruits of my labor are this
          website and the technical projects on display! I am currently looking
          for my first position in the field in order to demonstrate my skills
          and grow as a web developer.{" "}
        </p>

        <p className="mt-7 text-2xl text-center text-gray-400 ">
          Thank you for visiting my portfolio website, and please feel free to
          connect with me on LinkedIn or via email.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
