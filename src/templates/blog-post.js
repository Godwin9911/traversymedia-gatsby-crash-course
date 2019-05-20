import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function Template({data,}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark 

  return(
      <Layout>
          <div>
         <Link to="/blog">Go Back</Link> 
         <hr/>
         <h1>{frontmatter.title}</h1>
         <h4>Posted by {frontmatter.author} on {' '}
        {frontmatter.date}
        </h4>
        <div dangerouslySetInnerHTML={{__html: html}}>

        </div>
        
      </div>
      </Layout>
  )

}

export const pageQuery = graphql`
    query ($path: String!){
        markdownRemark(frontmatter:{path: { eq: $path}}){
            html
            frontmatter{
                path
                title
                author
                date
            }
        }
    }
`
