import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

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
                <img src="/img/chart.png" />
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
  </Layout>
)

export default IndexPage
