import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="sticky top-0 py-6 pl-6 mb-8 text-base flex items-center space-x-4 w-full h-[7vh] bg-blue-900 z-50 lg:text-xl">
      <Link to="/" class="flex-initial">About</Link>
      <Link to="/projects" class="flex-initial">Projects</Link>
      <Link to="resume/" class="flex-initial">Resume</Link>
      <Link to="/skills" class="flex-initial">Skills</Link>
    </div>
  );
};

export default NavBar;
