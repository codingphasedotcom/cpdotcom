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
            <p>
              Follow this timeline to become a fullstack developer. All courses
              are in order but you will notice that there's icons before the
              name of each course.{' '}
              <span role="img" aria-label="required">
                🖥️
              </span>{' '}
              The computer means it's required for your to take. Now the{' '}
              <span role="img" aria-label="required">
                📗
              </span>
              green book means its an elective course which is optional. I do
              recommend for you guys to take all the courses but for example if
              you are comfortable enough with a topic and feel you don't need to
              the projects then thats your choice to make.
            </p>
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
                  <a href="/timeline" className="flag title">
                    TOOLS
                  </a>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="/timeline" className="flag">
                    <span role="img" aria-label="required">
                      🖥️
                    </span>{' '}
                    Terminal For Developers
                  </a>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 2 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="/timeline" className="flag">
                    <span role="img" aria-label="required">
                      🖥️
                    </span>{' '}
                    All Installations You Will Need
                  </a>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="/timeline" className="flag">
                    <span role="img" aria-label="required">
                      🖥️
                    </span>{' '}
                    Atom Text Editor 101
                  </a>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <a href="/timeline" className="flag title">
                    HTML & CSS
                  </a>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="/timeline" className="flag">
                    <span role="img" aria-label="required">
                      🖥️
                    </span>{' '}
                    Learn HTML and CSS
                  </a>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        📗
                      </span>{' '}
                      Build a ResponsiveWeb App
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        📗
                      </span>{' '}
                      Responsive HTML Emails
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        🖥️
                      </span>{' '}
                      CSS Animations
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        🖥️
                      </span>{' '}
                      Advance CSS with Flexbox and Grid
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        🖥️
                      </span>{' '}
                      Sass Like a Pro
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        🖥️
                      </span>{' '}
                      How to deploy your site
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        🖥️
                      </span>{' '}
                      Web Developer Personal Brand
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        📗
                      </span>{' '}
                      Build A Music Site
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        📗
                      </span>{' '}
                      Build a VCard
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        📗
                      </span>{' '}
                      Build a Dashboard{' '}
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        📗
                      </span>{' '}
                      Build a Web Developer Portfolio
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <span className="flag title">Javascript</span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        🖥️
                      </span>{' '}
                      Future Proof Javascript
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        🖥️
                      </span>{' '}
                      Object Oriented Programming
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        🖥️
                      </span>{' '}
                      JQuery
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="/timeline" className="flag">
                    <span role="img" aria-label="required">
                      🖥️
                    </span>{' '}
                    Node and NPM Basics
                  </a>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        🖥️
                      </span>{' '}
                      Gulp
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        📗
                      </span>{' '}
                      Pug JS - Template Engine
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        🖥️
                      </span>{' '}
                      ESNEXT - ES6, ES7, ES8
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        🖥️
                      </span>{' '}
                      HyperApp
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        📗
                      </span>{' '}
                      Build a Restaurant Web App{' '}
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        🖥️
                      </span>{' '}
                      React - Quick and Easy
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        🖥️
                      </span>{' '}
                      React Router by building a craigslist clone{' '}
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        📗
                      </span>{' '}
                      Polymer 3
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        📗
                      </span>{' '}
                      How web developers make passive income
                    </a>
                  </span>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">
                    <a href="/timeline">
                      <span role="img" aria-label="required">
                        📗
                      </span>{' '}
                      Phaser 3 - Javascript Games
                    </a>
                  </span>
                </div>
                <div className="desc" />
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
                  <a href="/timeline" className="flag title">
                    Databases
                  </a>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="/timeline" className="flag">
                    <span role="img" aria-label="required">
                      🖥️
                    </span>{' '}
                    MYSQL
                  </a>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <a href="/timeline" className="flag title">
                    Javascript
                  </a>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="/timeline" className="flag">
                    <span role="img" aria-label="required">
                      🖥️
                    </span>{' '}
                    Adonis JS Framework
                  </a>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <a href="/timeline" className="flag title">
                    PHP
                  </a>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="/timeline" className="flag">
                    <span role="img" aria-label="required">
                      🖥️
                    </span>{' '}
                    PHP 7 and Laravel
                  </a>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="/timeline" className="flag">
                    <span role="img" aria-label="required">
                      🖥️
                    </span>{' '}
                    Wordpress course
                  </a>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <a href="/timeline" className="flag title">
                    Crystal
                  </a>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="/timeline" className="flag">
                    <span role="img" aria-label="required">
                      🖥️
                    </span>{' '}
                    Crystal Programming Language
                  </a>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <a href="/timeline" className="flag title">
                    Ruby
                  </a>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="/timeline" className="flag">
                    <span role="img" aria-label="required">
                      🖥️
                    </span>{' '}
                    Ruby Programming Language
                  </a>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a href="/timeline" className="flag">
                    <span role="img" aria-label="required">
                      🖥️
                    </span>{' '}
                    Ruby on Rails
                  </a>
                </div>
                <div className="desc" />
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
