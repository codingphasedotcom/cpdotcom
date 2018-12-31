import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

import courseLogoIMG from '../../../assets/courses/phaser_3/course-logo.png'
import codeExampleIMG from '../../../assets/courses/phaser_3/code-example.png'
import tiledToolIMG from '../../../assets/courses/phaser_3/tiled-tool.png'
import shoeboxToolIMG from '../../../assets/courses/phaser_3/shoebox-tool.png'
import iphonePreviewIMG from '../../../assets/courses/phaser_3/iphone-preview.png'

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
            <div className="column">
              <img src={courseLogoIMG} alt="Phaser 3 Logo" />
            </div>
            <div className="column">
              <h2>Learn the best javascript game engine</h2>
              <ul>
                <li>Learn to read the documentation</li>
                <li>Load Assets</li>
                <li>Sprites Animations</li>
                <li>Transforming Gameobjects</li>
                <li>User input</li>
                <li>Work with the physics engine</li>
                <li>Create animations with tweens</li>
                <li>Work with audio in your games</li>
                <li>
                  build a tictactoe game to reenforce everything you learned
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
                <h1>ES6+</h1>
                <p>We made sure we used the latest Javascript</p>
              </div>
              <div className="column">
                <img src={codeExampleIMG} alt="Code Example" />
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
                <img src={tiledToolIMG} alt="tiled program" />
              </div>
              <div className="column">
                <h1>Tiled</h1>
                <p>Design and prototype your games levels</p>
              </div>
            </div>
            <div className="grid-container">
              <div className="column">
                <img src={shoeboxToolIMG} alt="shoebox sprite application" />
              </div>
              <div className="column">
                <h1>Shoebox</h1>
                <p>Design and prototype your games levels</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="project-preview">
        <div className="bg" />
        <div className="section-content">
          <div className="container">
            <h2>
              Learn to build your own games <br />
              Not just follow an instructor
            </h2>
            <div className="info-area">
              <div className="info-column">
                <h2>
                  Tic Tac Toe <br />
                  Championship
                </h2>
              </div>
              <div className="img-column">
                <div className="chartbg">
                  <img src={iphonePreviewIMG} alt="tictactoe game on iphone" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="payment-section">
        <div className="section-content">
          <div className="container">
            <h2>Love what you are seeing right now? Choose a payment!</h2>
            <div className="payment-grid">
              <div>
                <a href="/" className="button">
                  Enroll in Course for $50
                </a>
              </div>
              <div>OR</div>
              <a href="/">
                Sign up for a subscription and receive unlimited access to all
                the courses
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
