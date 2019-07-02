import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import FavoriteCoursesComp from '../components/FavoriteCoursesComp'

import chartImg from '../../assets/chart.webp'
import movableinkIMG from '../../assets/logos/movableink.png'
import paypalIMG from '../../assets/logos/paypal.png'
import sonyIMG from '../../assets/logos/sony.png'
import timewarnerIMG from '../../assets/logos/timewarner.png'
import universalIMG from '../../assets/logos/universal.png'
import iconcheckIMG from '../../assets/icon-check.png'
import esanfordIMG from '../../assets/testimonials/esanford.jpg'
import kperezIMG from '../../assets/testimonials/kperez.jpeg'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`]}
      thumbnail="https://www.codingphase.com/img/websitethumb.png"
    />
    <section id="jumbo-top">
      <div className="container-fluid ">
        <div className="headline">
          <h2>
            The Most Consistent Way To Generate Wealth Is To Learn To Code
          </h2>

          <div className="button-area desktop-only">
            <a href="/leads/can-you-become-a-dev/">Start For Free</a>
            <a href="https://student.codingphase.com/p/all-courses-subscription">
              Register
            </a>
          </div>
        </div>
        <div class="price-section">
          <div class="top">Only</div>
          <div class="large-number">$20</div>
          <div class="sub">Per Month</div>
          <div className="button-area mobile-only">
            <a href="/leads/can-you-become-a-dev/" className="">
              Start For Free
            </a>
            <a href="https://student.codingphase.com/p/all-courses-subscription">
              Register
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="americans">
      <div className="bg" />
      <div className="section-content">
        <div className="container">
          <h1>Why You Should Learn To Code?</h1>
          <div className="sub-title">Lets compare the average american job</div>

          <div className="info-area">
            <div className="chart-column">
              <div className="chartbg">
                <img src={chartImg} alt="" />
              </div>
            </div>
            <div className="info-column">
              <div className="line1">On average it's less than</div>
              <div className="line2">35k</div>
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
    <section id="no-degree" class="top-degree">
      <div className="container">
        <div className="section-content">
          <h4>Oh did I mention...</h4>
          <h2>No degree required</h2>
          <div className="image" />
        </div>
      </div>
    </section>
    <section id="what-you-get">
      <div className="container">
        <h2>What do you get?</h2>
        <div className="list">
          <div className="item">OVER 300 HOURS OF VIDEOS</div>
          <div className="item">UNLIMITED ACCESS</div>
          <div className="item">ALL FILES PROVIDED FOR DOWNLOAD</div>
          <div className="item">EVERYTHING YOU NEED TO BECOME A DEVELOPER</div>
          <div className="item">THE SKILLS THAT ARE IN DEMAND</div>
          <div className="item">WE ARE UPTODATE WITH THE INDUSTRY</div>
          <div className="item">
            30 DAYS
            <br /> MONEY BACK
          </div>
        </div>
      </div>
    </section>

    <section id="pricing-plans">
      <div className="bg" />
      <div className="container">
        <div className="section-content">
          <div className="sub-title">Ready To Start?</div>

          <div className="button-area">
            <a href="https://student.codingphase.com/p/all-courses-subscription">
              Register
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query IndePageQuery {
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
