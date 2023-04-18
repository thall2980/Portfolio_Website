import React from "react";
import logos from "./logos";
import { SiGithub } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiRuby } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiUbuntu } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div className="pt-8 overflow-y-auto h-screen ">
      <div className="text-center text-5xl pb-20">Skills</div>
      <div className="px-[10%]  grid gap-8 grid-cols-4 ">
        {/* {logos.map((logo) => (
          <div key={logo.id} className="logo_title_container">
            <p>{logo.title}</p>
            <img src={logo.image} alt="" className="logo" />
          </div>
        ))} */}
        <div className="flex items-center flex-col ">
          <SiGithub className="App-logo " />
          <p className="text-center">GitHub</p>
        </div>
        <div className="flex items-center flex-col">
        <SiJavascript className="App-logo" />
          <p className="text-center">JavaScript</p>
        </div>
        <div className="flex items-center flex-col">
        <SiReact className="App-logo" />
          <p className="text-center">React</p>
        </div>
        <div className="flex items-center flex-col">
        <SiRuby className="App-logo" />
          <p className="text-center">Ruby</p>
        </div>
        <div className="flex items-center flex-col">
        <SiRubyonrails className="App-logo" />
          <p className="text-center">Rails</p>
        </div>
        <div className="flex items-center flex-col">
        <SiSqlite className="App-logo" />
          <p className="text-center">SQLite</p>
        </div>
        <div className="flex items-center flex-col">
        <SiPostgresql className="App-logo" />
          <p className="text-center">PostgreSQL</p>
        </div>
        <div className="flex items-center flex-col">
        <SiHtml5 className="App-logo" />
          <p className="text-center">HTML</p>
        </div>
        <div className="flex items-center flex-col">
        <SiCss3 className="App-logo" />
          <p className="text-center">CSS</p>
        </div>
        <div className="flex items-center flex-col">
        <SiUbuntu className="App-logo" />
          <p className="text-center">Ubuntu</p>
        </div>
        <div className="flex items-center flex-col">
        <SiNpm className="App-logo" />
          <p className="text-center">npm</p>
        </div>
        <div className="flex items-center flex-col">
        <SiTailwindcss className="App-logo" />
          <p className="text-center">Tailwind</p>
        </div>











      </div>
    </div>
  );
};

export default Skills;
