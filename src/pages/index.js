import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import Info from "../components/info"
import { Helmet } from "react-helmet"
import Footer from "../components/footer"
import MetaTags from 'react-meta-tags';

function index() {
  return (
    <div>
       <MetaTags>
            <title>Page 1</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="path/to/image.jpg" />
            <meta name="google-site-verification" content="ZUD_YcRlDkqjXd2crIbpQpGIYPw7LHZlmXZQ7Yxymsg" />
          </MetaTags>
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
