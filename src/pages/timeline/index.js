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
          <h1>Instructions</h1>
          <div className="legend">
            <p>Follow this timeline to become a fullstack developer. All courses are in order but you will notice that there's icons before the name of each course. 🖥️ The computer means it's required for your to take. Now the 📗 green book means its an elective course which is optional. I do recommend for you guys to take all the courses but for example if you are comfortable enough with a topic and feel you don't need to the projects then thats your choice to make.</p>
          </div>
          <div className="adspot">
            <Adsense />
          </div>
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
                  <a href="#" className="flag">🖥️ Terminal For Developers</a>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 2 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="#" className="flag">🖥️ All Installations You Will Need</a>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="#" className="flag">🖥️ Atom Text Editor 101</a>
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
                  <a href="#" className="flag">🖥️ Learn HTML and CSS</a>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">📗 Build a ResponsiveWeb App</a></span>
                  
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">📗 Responsive HTML Emails</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">🖥️ CSS Animations</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">🖥️ Advance CSS with Flexbox and Grid</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">🖥️ Sass Like a Pro</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">🖥️ How to deploy your site</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">🖥️ Web Developer Personal Brand</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">📗 Build A Music Site</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">📗 Build a VCard</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">📗 Build a Dashboard </a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">📗 Build a Web Developer Portfolio</a></span>
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
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">🖥️ Future Proof Javascript</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">🖥️ Object Oriented Programming</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">🖥️ JQuery</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="#" className="flag">🖥️ Node and NPM Basics</a>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">🖥️ Gulp</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">📗 Pug JS - Template Engine</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">🖥️ ESNEXT - ES6, ES7, ES8</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">🖥️ HyperApp</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">📗 Build a Restaurant Web App </a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">🖥️ React - Quick and Easy</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">🖥️ React Router by building a craigslist clone </a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">📗 Polymer 3</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">📗 How web developers make passive income</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag"><a href="#">📗 Phaser 3 - Javascript Games</a></span>
                </div>
                <div className="desc"></div>
              </div>
            </li>
          </ul>
          <div className="adspot">
            <Adsense />
          </div>
          {/* The Timeline */}
          <h1>Back End Developer</h1>
          <ul className="timeline">
            {/* Item 1 */}
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <a href="#" className="flag title">Databases</a>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="#" className="flag">🖥️ MYSQL</a>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <a href="#" className="flag title">Javascript</a>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="#" className="flag">🖥️ Adonis JS Framework</a>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <a href="#" className="flag title">PHP</a>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="#" className="flag">🖥️ PHP 7 and Laravel</a>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="#" className="flag">🖥️ Wordpress course</a>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <a href="#" className="flag title">Crystal</a>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="#" className="flag">🖥️ Crystal Programming Language</a>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <a href="#" className="flag title">Ruby</a>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="#" className="flag">🖥️ Ruby Programming Language</a>
                </div>
                <div className="desc"></div>
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="#" className="flag">🖥️ Ruby on Rails</a>
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
