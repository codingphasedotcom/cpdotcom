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
                  <a
                    href="https://codingphase.teachable.com/courses/enrolled/204451"
                    className="flag"
                  >
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
                  <a
                    href="https://codingphase.teachable.com/courses/enrolled/328397"
                    className="flag"
                  >
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
                  <a
                    href="https://codingphase.teachable.com/courses/enrolled/191709"
                    className="flag"
                  >
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
                  <a
                    href="https://codingphase.teachable.com/courses/enrolled/190248"
                    className="flag"
                  >
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/204463">
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/349237">
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/269287">
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/253829">
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/212881">
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/336889">
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/360152">
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/326322">
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/444849">
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/219318">
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/265655">
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/191705">
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/235002">
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/191707">
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
                  <a
                    href="https://codingphase.teachable.com/courses/enrolled/476145"
                    className="flag"
                  >
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/286837">
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/220444">
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/213303">
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/209089">
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/229814">
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/215976">
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/495115">
                      <span role="img" aria-label="required">
                        🖥️
                      </span>{' '}
                      Redux - The Easy Way Course
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/287476">
                      <span role="img" aria-label="required">
                        📗
                      </span>{' '}
                      Learn React by building a craigslist clone{' '}
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/335280">
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/255444">
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
                    <a href="https://codingphase.teachable.com/courses/enrolled/459871">
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
                  <a href="/" className="flag title">
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
                  <a
                    href="https://codingphase.teachable.com/courses/enrolled/412709"
                    className="flag"
                  >
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
                  <a
                    href="https://codingphase.teachable.com/courses/enrolled/302905"
                    className="flag"
                  >
                    <span role="img" aria-label="required">
                      🖥️
                    </span>{' '}
                    Node - Adonis JS Framework
                  </a>
                </div>
                <div className="desc" />
              </div>
            </li>
            {/* Item 1 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <a
                    href="https://codingphase.teachable.com/courses/enrolled/479516"
                    className="flag"
                  >
                    <span role="img" aria-label="required">
                      📗
                    </span>{' '}
                    E-commerce Site with Node
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
                  <a
                    href="https://codingphase.teachable.com/courses/enrolled/235851"
                    className="flag"
                  >
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
                  <a
                    href="https://codingphase.teachable.com/courses/enrolled/387832"
                    className="flag"
                  >
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
                  <a
                    href="https://codingphase.teachable.com/courses/enrolled/394035"
                    className="flag"
                  >
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
                  <a
                    href="https://codingphase.teachable.com/courses/enrolled/261619"
                    className="flag"
                  >
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
                  <a
                    href="https://codingphase.teachable.com/courses/enrolled/272602"
                    className="flag"
                  >
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
