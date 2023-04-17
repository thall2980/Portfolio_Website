import React from "react";
import image from "../img/About_Background.jpg";

const AboutMe = () => {
  return (
    <div
      // style={{ backgroundImage: `url(${image})` }}
      className="h-[100vh] h-fit overflow-y-auto xl:flex flex-row px-20 pt-20 "
    >
      <div className="flex flex-row  lg:flex flex-col w-full">
        <h1 className="text-3xl text-gray-400 lg:text-7xl">Tyler Hall</h1>
        <h2 className="pt-6 text-2xl  text-gray-400 lg:text-5xl">
          Full Stack Web Developer
        </h2>
      </div>
      <div className=" xl:w-3/5">
        <p className="mt-7  text-center text-gray-400 lg:text-2xl">
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

        <p className="mt-7 text-center text-gray-400 lg:text-2xl">
          Thank you for visiting my portfolio website, and please feel free to
          connect with me on LinkedIn or via email.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
