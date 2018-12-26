import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import nodegreeIMG from '../../assets/nodegree.jpg'
import chartImg from '../../assets/chart.png'
import movableinkIMG from '../../assets/logos/movableink.png'
import paypalIMG from '../../assets/logos/paypal.png'
import sonyIMG from '../../assets/logos/sony.png'
import timewarnerIMG from '../../assets/logos/timewarner.png'
import universalIMG from '../../assets/logos/universal.png'
import iconcheckIMG from '../../assets/icon-check.png'
import esanfordIMG from '../../assets/testimonials/esanford.jpg'
import kperezIMG from '../../assets/testimonials/kperez.jpeg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section id="jumbo-top">
      <div className="container-fluid ">
        <h2>What if you could earn 100k a year?</h2>
        <h2>Would you take that opportunity?</h2>
        <h2>Learn to Code Today</h2>

        <div className="button-area">
          <a>Register</a>
        </div>
      </div>
    </section>
    <section id="popular-courses">
      <div class="bg" />
      <div class="section-content">
        <div className="container">
          <div className="sub-title">Our Most Popular Courses</div>
          <div className="course-grid">
            <div
              className="course"
              style={{
                background:
                  'linear-gradient(45deg, rgba(18, 121, 252, 1) 1%, rgba(89, 174, 255, 0.5) 100%), url("https://www.filepicker.io/api/file/RX9eR6VTrKKkdIak3Xmr")',
              }}
            >
              <h4>React</h4>
              <h5>32 Videos</h5>
            </div>
            <div
              className="course"
              style={{
                background:
                  'linear-gradient(45deg, rgba(18, 121, 252, 1) 1%, rgba(89, 174, 255, 0.5) 100%), url("https://www.filepicker.io/api/file/RX9eR6VTrKKkdIak3Xmr")',
              }}
            >
              <h4>React</h4>
              <h5>32 Videos</h5>
            </div>
            <div
              className="course"
              style={{
                background:
                  'linear-gradient(45deg, rgba(18, 121, 252, 1) 1%, rgba(89, 174, 255, 0.5) 100%), url("https://www.filepicker.io/api/file/RX9eR6VTrKKkdIak3Xmr")',
              }}
            >
              <h4>React</h4>
              <h5>32 Videos</h5>
            </div>
            <div
              className="course"
              style={{
                background:
                  'linear-gradient(45deg, rgba(18, 121, 252, 1) 1%, rgba(89, 174, 255, 0.5) 100%), url("https://www.filepicker.io/api/file/RX9eR6VTrKKkdIak3Xmr")',
              }}
            >
              <h4>React</h4>
              <h5>32 Videos</h5>
            </div>
            <div
              className="course"
              style={{
                background:
                  'linear-gradient(45deg, rgba(18, 121, 252, 1) 1%, rgba(89, 174, 255, 0.5) 100%), url("https://www.filepicker.io/api/file/fIKS9rBnT9WXsytDLKS8")',
              }}
            >
              <h4>Music Site</h4>
              <h5>32 Videos</h5>
            </div>
            <div
              className="course"
              style={{
                background:
                  'linear-gradient(45deg, rgba(18, 121, 252, 1) 1%, rgba(89, 174, 255, 0.5) 100%), url("https://www.filepicker.io/api/file/RX9eR6VTrKKkdIak3Xmr")',
              }}
            >
              <h4>React</h4>
              <h5>32 Videos</h5>
            </div>
            <div
              className="course"
              style={{
                background:
                  'linear-gradient(45deg, rgba(18, 121, 252, 1) 1%, rgba(89, 174, 255, 0.5) 100%), url("https://www.filepicker.io/api/file/RX9eR6VTrKKkdIak3Xmr")',
              }}
            >
              <h4>React</h4>
              <h5>32 Videos</h5>
            </div>
            <div
              className="course"
              style={{
                background:
                  'linear-gradient(45deg, rgba(18, 121, 252, 1) 1%, rgba(89, 174, 255, 0.5) 100%), url("https://www.filepicker.io/api/file/RX9eR6VTrKKkdIak3Xmr")',
              }}
            >
              <h4>React</h4>
              <h5>32 Videos</h5>
            </div>
            <div
              className="course"
              style={{
                background:
                  'linear-gradient(45deg, rgba(18, 121, 252, 1) 1%, rgba(89, 174, 255, 0.5) 100%), url("https://www.filepicker.io/api/file/RX9eR6VTrKKkdIak3Xmr")',
              }}
            >
              <h4>React</h4>
              <h5>32 Videos</h5>
            </div>
          </div>
          <div class="courses-total">30+</div>
          <div className="sub-title">
            Courses and every month <br />
            we add more
          </div>
        </div>
      </div>
    </section>
    <section id="americans">
      <div className="bg" />
      <div className="section-content">
        <div className="container">
          <div className="sub-title">Lets compare the average american job</div>

          <div class="info-area">
            <div class="chart-column">
              <div className="chartbg">
                <img src={chartImg} />
              </div>
            </div>
            <div class="info-column">
              <div class="line1">On average it's less than</div>
              <div class="line2">50k</div>
              <div class="line3">
                At the same time <br />
                Developers make an average of
              </div>
              <div class="line4">$84,000</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="no-degree">
      <div className="container">
        <div className="section-content">
          <h4>Oh did I mention...</h4>
          <h2>No degree required</h2>
          <div className="image" />
          <div className="students-total">50,000</div>
          <div className="sub-title">
            students have taken courses <br />
            from codingphase.com so you are not alone
          </div>
          <div className="testimonials">
            <div className="testimonial">
              <div class="user-img">
                <div
                  class="img"
                  style={{
                    background: `url('${esanfordIMG}')`,
                  }}
                />
              </div>
              <div class="info">
                <h4>E. Sanford</h4>
                <h5>Front End Developer</h5>
                <p>
                  Met with my first client updating his business' WordPress
                  site. Thanks to @codingphase I was able to impress him with
                  what I learned from your course. I'm excited about the
                  opportunity and will be getting more engaged on
                  http://codingphase.com
                </p>
              </div>
            </div>
            <div className="testimonial">
              <div class="user-img">
                <div class="img" />
              </div>
              <div class="info">
                <h4>A. Rico</h4>
                <h5>Front End Developer</h5>
                <p>
                  I followed Joe's advised many times. After 2 years learning
                  html, css and javascript i got the job!, follow his advised
                  too. Thanks, Joe!﻿
                </p>
              </div>
            </div>
            <div className="testimonial">
              <div class="user-img">
                <div class="img" />
              </div>
              <div class="info">
                <h4>L. Redman</h4>
                <h5>Front End Developer</h5>
                <p>
                  I am a paid member and with your help I was able to break into
                  the industry with my first job at Godaddy. It took me 8 months
                  of studying code everyday for 4 hours and following your
                  courses and advise and it worked, I made it. Now I continue
                  working on your courses to start learning more backend php.
                </p>
              </div>
            </div>
            <div className="testimonial">
              <div class="user-img">
                <div
                  class="img"
                  style={{
                    background: `url('${kperezIMG}')`,
                  }}
                />
              </div>
              <div class="info">
                <h4>K. Perez</h4>
                <h5>Front End Developer</h5>
                <p>
                  Coding Phase Youtube and channel changed my life, i was going
                  in circles trying to learn how to code and then once i found
                  coding has it all made sense. He layed out the path to become
                  a developer really easily with the 3 projects you need and how
                  to find jobs, once i put myself out there i was able to get a
                  job and now i’ve gone ahead and begun my second job with an
                  upgrade in pay :D, thank you Joe!
                </p>
              </div>
            </div>
          </div>
          <div className="sub-title">
            A few companies that have hired our students
          </div>
          <div className="logos">
            <div className="logo">
              <img src={movableinkIMG} />
            </div>
            <div className="logo">
              <img src={paypalIMG} />
            </div>
            <div className="logo">
              <img src={universalIMG} />
            </div>
            <div className="logo">
              <img src={timewarnerIMG} />
            </div>
            <div className="logo">
              <img src={sonyIMG} />
            </div>
          </div>
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
          <div className="sub-title">Plans</div>
          <div className="plans-table">
            {/* Header */}
            <div className="box header features">Features</div>
            <div className="box header">Free</div>
            <div className="box header">Monthly</div>
            <div className="box header">Yearly</div>
            <div className="box header">Lifetime</div>
            {/* Row */}
            <div className="box  features">Unlimited Access</div>
            <div className="box ">Limited to Free Courses Only</div>
            <div className="box ">
              <img src={iconcheckIMG} />
            </div>
            <div className="box ">
              <img src={iconcheckIMG} />
            </div>
            <div className="box ">
              <img src={iconcheckIMG} />
            </div>

            {/* Row */}
            <div className="box  features">Project Files</div>
            <div className="box " />
            <div className="box ">
              <img src={iconcheckIMG} />
            </div>
            <div className="box ">
              <img src={iconcheckIMG} />
            </div>
            <div className="box ">
              <img src={iconcheckIMG} />
            </div>
            {/* Row */}
            <div className="box  features">Discord Chatroom</div>
            <div className="box " />
            <div className="box ">
              <img src={iconcheckIMG} />
            </div>
            <div className="box ">
              <img src={iconcheckIMG} />
            </div>
            <div className="box ">
              <img src={iconcheckIMG} />
            </div>

            {/* Row */}
            <div className="box  features">Support</div>
            <div className="box " />
            <div className="box ">
              <img src={iconcheckIMG} />
            </div>
            <div className="box ">
              <img src={iconcheckIMG} />
            </div>
            <div className="box ">
              <img src={iconcheckIMG} />
            </div>
            {/* Row */}
            <div className="box  features">Priority Support</div>
            <div className="box " />
            <div className="box " />
            <div className="box " />
            <div className="box ">
              <img src={iconcheckIMG} />
            </div>
            {/* Row */}
            <div className="box  features">Resume and Portfolio Review</div>
            <div className="box " />
            <div className="box " />
            <div className="box " />
            <div className="box ">
              <img src={iconcheckIMG} />
            </div>
            {/* Row */}
            <div className="box  features">Savings</div>
            <div className="box ">None</div>
            <div className="box ">None</div>
            <div className="box ">20% OFF</div>
            <div className="box ">Unlimited</div>
            {/* Row */}
            <div className="box  features">Price</div>
            <div className="box ">$0</div>
            <div className="box ">$20</div>
            <div className="box ">$200</div>
            <div className="box ">$600</div>
          </div>
          <div className="button-area">
            <a>Register</a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
