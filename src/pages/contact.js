import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import { Helmet } from "react-helmet"
import Footer from "../components/footer"

function blogPage() {
  return (
    <div>
        <Appbar />
        <Helmet>
            <meta charSet="utf-8" />
            <title>Contacts | Aman</title>
        </Helmet>
        <h1 className="display-3 text-muted mx-5 my-4 h3 text-justify info">this is the contact page</h1>
        <Footer/>
    </div>
  )
}

export default blogPage
