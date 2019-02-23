import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Adsense from '../components/Adsense'

export default class BlogList extends React.Component {
  render() {
    const data = this.props.data
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    // const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <section id="blog-page" className="all-posts">
          <div className="">
            <div className="grid">
              <div className="content-area">
                <h1>Blog</h1>
                <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                <div className="post-grid">
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id} className="post">
                      <h3>
                        <a href={node.fields.slug}>
                          <img src={node.frontmatter.cover_image} alt="Logo" />
                          {node.frontmatter.title} <span />
                        </a>
                      </h3>

                      <p>{node.excerpt}</p>
                    </div>
                  ))}
                </div>
                <div className="pagination">
                  {!isFirst && (
                    <Link to={`/blog/${prevPage}`} rel="prev">
                      ← Previous Page
                    </Link>
                  )}
                  {!isLast && (
                    <Link to={`/blog/${nextPage}`} rel="next">
                      Next Page →
                    </Link>
                  )}
                  {/* {Array.from({ length: numPages }, (_, i) => (
                    <Link
                      key={`pagination-number${i + 1}`}
                      to={`/${i === 0 ? '' : i + 1}`}
                    >
                      {i + 1}
                    </Link>
                  ))} */}
                </div>
              </div>
              <div className="side-bar">
                <Adsense />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            cover_image
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
