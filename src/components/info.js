import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaYoutube as Youtube,
  FaInstagram as Insta,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style = {{color : "#324359"}}>Hello, I'm</span> <br />
        Aman Bhargava.
      </div>
      <div className="h1 code mt-4 mb-3" style={{color: "#324359"}}>async {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        A Machine Learning Enthusiast and  Web
        Developer. I have 1 years of experiance with programming. Also Python and JavaScript are two main languages that i code in.
        <br /> 
      </div>
      <div className="h1 code mt-2 mb-3" style={{color: "#324359"}}>{"}"}</div>
      <div className="h1 mt-5">
        <ul className="flex-container space-evenly">
          <a className="mr-5 icon" href="https://twitter.com/bhargavaaman32" target="_blank" rel="noopener noreferrer">
            <Twitter class="co" />
          </a>
          <a className="mr-5 icon" href="https://github.com/BhargavaCreates" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a className="mr-5 icon" href="https://www.youtube.com/channel/UCJlxSTSflbyYek7KXKTjSsw" target="_blank" rel="noopener noreferrer">
            <Youtube />
          </a>
          <a className="mr-5 icon" href="mailto://bhargavaaman32@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail />
          </a>
          </ul>
      </div>
    </div>
  )
}
