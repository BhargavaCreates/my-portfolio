import React from "react"
import Intent from "./link"

export default function Appbar() {
  return (
    <div className="container my-3">
      <ul className="nav justify-content-center">
        <li className="nav-item mx-4">
          <Intent to="/">Home</Intent>
        </li>
        <li className="nav-item mx-4">
          <Intent to="/projects">My Projects</Intent>
        </li>
        <li className="nav-item mx-4">
          <Intent to="/blog">Blogs</Intent>
        </li>
        <li className="nav-item mx-4">
          <Intent to="/resume">Resume</Intent>
        </li>
        <li className="nav-item mx-4">
          <Intent to="/contact">Reach Me</Intent>
        </li>
      </ul>
    </div>
  )
}
