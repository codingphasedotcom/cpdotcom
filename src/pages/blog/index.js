import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Adsense from '../../components/Adsense'
import Img from 'gatsby-image'

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <section id="blog-page" class="all-posts">
        <div className="container">
          <div className="grid">
            <div className="content-area">
              <h1>Blog</h1>
              <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
              <div className="post-grid">
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <div key={node.id} className="post">
                    <h3>
                      <a href={node.fields.slug}>
                        {node.frontmatter.title}{' '}
                        <span>— {node.frontmatter.date}</span>
                      </a>
                    </h3>
                    <p>{node.excerpt}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="side-bar">
              swag
              <Adsense />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
