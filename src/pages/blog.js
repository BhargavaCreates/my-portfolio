import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import { Helmet } from "react-helmet"
import Footer from "../components/footer"
import { graphql } from 'gatsby'
import Card from '../components/blogCard'


function blogPage( {data} ) {
  return (
    <div className="container">
        <Appbar />
        <Helmet>
            <meta charSet="utf-8" />
            <title>Blogs | Aman</title>
        </Helmet>        
        <div className="my-5"></div>
        <h1 className="display-3" id='welcome'>welcome to blogs</h1>
        <div className="row">
          {data.allStrapiArticle.edges.map( document => (
            <Card
            cardTitle={document.node.title}
            cardContent={document.node.content}
            link={document.node.id}
          />
          ))}
        </div>
        <Footer/>
    </div>
  )
}

export default blogPage


export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`

