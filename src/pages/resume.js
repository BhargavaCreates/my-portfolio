import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import { Helmet } from "react-helmet"
import Footer from "../components/footer"

function resume() {
  return (
    <div>
        <Appbar />
        <Helmet>
            <meta charSet="utf-8" />
            <title>Resume | Aman</title>
        </Helmet>
        <h1 className="display-3 text-muted mx-5 my-4 h3 text-justify info">this is the resume page</h1>
        <Footer/>
    </div>
  )
}

export default resume
