
import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout' 
import ReactMarkdown from "react-markdown"


const ArticleTemplate = ({ data }) => (
    <Layout>
        <h1 id='welcome'>{data.strapiArticle.title}</h1>
          <p  id='welcome'>by <Link to={`#`}>{data.strapiArticle.author.username}</Link></p>
        <ReactMarkdown className='article' source={data.strapiArticle.content} />
    </Layout>
   
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      content
      author {
        id
        username
      }
    }
  }
`