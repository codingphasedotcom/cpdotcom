import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Adsense from '../components/Adsense'
export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <section id="blog-page" className="single-post">
        <div className="">
          <div className="grid">
            <div className="content-area">
              <h1>{post.frontmatter.title}</h1>
              <div className="profile">
                <div
                  className="img"
                  style={{
                    background:
                      'url("/img/blog/authors/joe-santos-garcia.png")',
                    width: '40px',
                    height: '40px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="author">{post.frontmatter.author}</div>
                <div className="date">{post.frontmatter.date}</div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
      }
    }
  }
`
