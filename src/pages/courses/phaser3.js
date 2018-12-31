import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import FavoriteCoursesComp from '../../components/FavoriteCoursesComp'

import chartImg from '../../../assets/chart.png'
import movableinkIMG from '../../../assets/logos/movableink.png'
import paypalIMG from '../../../assets/logos/paypal.png'
import sonyIMG from '../../../assets/logos/sony.png'
import timewarnerIMG from '../../../assets/logos/timewarner.png'
import universalIMG from '../../../assets/logos/universal.png'
import iconcheckIMG from '../../../assets/icon-check.png'
import esanfordIMG from '../../../assets/testimonials/esanford.jpg'
import kperezIMG from '../../../assets/testimonials/kperez.jpeg'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div id="courses-layout">
      <section id="jumbo-top">
        <div className="container-fluid ">
          <h1>Phaser 3</h1>

          <div className="button-area">
            <a href="/">Enroll in course</a>
          </div>
        </div>
      </section>
      <section id="course-info">
        <div className="bg" />
        <div className="section-content">
          <div className="container">
            <div className="column">img</div>
            <div className="column">
              <h2>Learn the best javascript game engine</h2>
              <ul>
                <li>item</li>
                <li>OVER 300 HOURS OF VIDEOS</li>
                <li>UNLIMITED ACCESS</li>
                <li>ALL FILES PROVIDED FOR DOWNLOAD</li>
                <li>EVERYTHING YOU NEED TO BECOME A DEVELOPER</li>
                <li>THE SKILLS THAT ARE IN DEMAND</li>
                <li>WE ARE UPTODATE WITH THE INDUSTRY</li>
                <li>
                  30 DAYS
                  <br /> MONEY BACK
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="course-highlight">
        <div className="section-content">
          <div className="container">
            <h3>Modern Javascript</h3>
            <div className="grid-container">
              <div className="column">
                <h1>ES6</h1>
                <p>We made sure we used the latest Javascript</p>
              </div>
              <div className="column">
                <div>Code IMG</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tools">
        <div className="section-content">
          <div className="container">
            <h3>Tools</h3>
            <div className="grid-container">
              <div className="column">
                <h1>ES6</h1>
                <p>We made sure we used the latest Javascript</p>
              </div>
              <div className="column">
                <div>Code IMG</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="americans">
        <div className="bg" />
        <div className="section-content">
          <div className="container">
            <div className="sub-title">
              Lets compare the average american job
            </div>

            <div className="info-area">
              <div className="chart-column">
                <div className="chartbg">
                  <img src={chartImg} alt="" />
                </div>
              </div>
              <div className="info-column">
                <div className="line1">On average it's less than</div>
                <div className="line2">50k</div>
                <div className="line3">
                  At the same time <br />
                  Developers make an average of
                </div>
                <div className="line4">$84,000</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export const query = graphql`
  query Phaser3PageQuery {
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
export default IndexPage
