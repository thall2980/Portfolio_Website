import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
        <Link to="/">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="resume/">Resume</Link>
        <Link to="/skills">Skills</Link>
    </div>
  )
}

export default NavBar