import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import Adsense from '../../components/Adsense'

import SEO from '../../components/seo'


const CoursesPage = ({ data }) => (
  <Layout>
    <SEO title="Timeline" keywords={[`gatsby`, `application`, `react`]} />
    <section id="timeline-page">
      <div className="content-area">
        <div className="container">
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic" rel="stylesheet" type="text/css" />
          {/* The Timeline */}
          <h1>Front End Developer</h1>
          <ul className="timeline">
            {/* Item 1 */}
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <a href="#" className="flag title">TOOLS</a>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="#" className="flag">Terminal For Developers</a>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 2 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="#" className="flag">All Installations You Will Need</a>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="#" className="flag">Atom Text Editor 101</a>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <a href="#" className="flag title">HTML & CSS</a>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="#" className="flag">Learn HTML and CSS</a>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">Build a ResponsiveWeb App (Optional)</a></span>
                  
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#" >Responsive HTML Emails</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">CSS Animations</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">Advance CSS with Flexbox and Grid</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">Sass Like a Pro</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">How to deploy your site</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">Web Developer Personal Brand</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">Build A Music Site</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">Build a VCard</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">Build a Dashboard (Optional)</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">Build a Web Developer Portfolio (Optional)</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <span className="flag title">Javascript</span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
          </ul>
          <div className="adspot">
            <Adsense />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query TimelinePageQuery {
    coursesDataJson {
      data {
        title
        price
        type
        category
        slug
        url
        hours
        favorite
        imgs {
          thumbnail
        }
      }
    }
  }
`

export default CoursesPage
