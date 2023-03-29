import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className='sticky top-0 py-6 pl-6 mb-8 text-2xl space-x-9 bg-blue-900'>
        <Link to="/">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="resume/">Resume</Link>
        <Link to="/skills">Skills</Link>
    </div>
  )
}

export default NavBar