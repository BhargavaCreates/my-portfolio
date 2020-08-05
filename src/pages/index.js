import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import Info from "../components/info"
import { Helmet } from "react-helmet"
import Footer from "../components/footer"

function index() {
  return (
    <div>
      <head><meta name="google-site-verification" content="ZUD_YcRlDkqjXd2crIbpQpGIYPw7LHZlmXZQ7Yxymsg" /></head>
      <Appbar />
      <Info />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Aman</title>
      </Helmet>
      <Footer/>
    </div>
  )
}

export default index
