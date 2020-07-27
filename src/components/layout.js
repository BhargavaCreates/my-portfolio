
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'

import Appbar from "../components/appbar"
import Footer from "../components/footer"

const Layout = ({ children }) => {
  return (
    <>
      <Appbar/>
      <Helmet>
        <meta charSet='utf-8'/>
        <title> Blog | Aman </title>
      </Helmet>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
