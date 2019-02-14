import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { getUrlParam } from '../../components/GetParams'
import Watchers from '../../components/watchers.js'
// import ScrollReveal from 'scrollreveal'

import courseLogoIMG from '../../../assets/courses/phaser_3/course-logo.png'
import codeExampleIMG from '../../../assets/courses/phaser_3/code-example.png'
import tiledToolIMG from '../../../assets/courses/phaser_3/tiled-tool.png'
import shoeboxToolIMG from '../../../assets/courses/phaser_3/shoebox-tool.png'
import iphonePreviewIMG from '../../../assets/courses/phaser_3/iphone-preview.png'
import jumboBGIMG from '../../../assets/courses/phaser_3/jumbobg.png'

class Page extends Component {
  constructor() {
    super()
    this.state = {
      coursePrice: 50,
      couponActive: false,
    }
  }
  componentDidMount = () => {
    this.setState({
      coursePrice: this.props.data.price
    }, () => {
      if (
        getUrlParam('coupon', '0') !== '0' &&
        getUrlParam('percent', '0') !== '0'
      ) {
        function priceAfterDiscount(price, discountPercent) {
          return price - (discountPercent * price) / 100
        }
        var finalPrice = priceAfterDiscount(
          this.state.coursePrice,
          getUrlParam('percent', '0')
        )
        this.setState({
          coursePrice: finalPrice,
          couponActive: true,
        })
      }
    })
    import('scrollreveal').then(({ default: ScrollReveal }) => {
      window.sr = ScrollReveal()
      const sr = window.sr
      sr.reveal(this.refs.logo, {
        origin: 'left',
        duration: 1000,
        delay: 150,
        distance: '500px',
        scale: 1,
        easing: 'ease',
      })
      sr.reveal(this.refs.code, {
        origin: 'right',
        duration: 1000,
        delay: 150,
        distance: '500px',
        scale: 1,
        easing: 'ease',
      })
      sr.reveal(this.refs.tool1, {
        origin: 'bottom',
        duration: 1000,
        delay: 150,
        distance: '300px',
        scale: 1,
        easing: 'ease',
      })
      sr.reveal(this.refs.tool2, {
        origin: 'bottom',
        duration: 1000,
        delay: 150,
        distance: '300px',
        scale: 1,
        easing: 'ease',
      })
      sr.reveal(this.refs.project1, {
        origin: 'bottom',
        duration: 1000,
        delay: 150,
        distance: '300px',
        scale: 1,
        easing: 'ease',
      })
    })
  }
  render() {
    return (
      <div id="courses-layout">
        <section
          id="jumbo-top"
          style={{
            background: `linear-gradient(to right, rgba(76, 5, 113, 0.7) 0%,rgba(76, 5, 113, 0.7) 100%),url("${jumboBGIMG}")`,
          }}
        >
          <div className="container-fluid ">
            <h1>{this.props.data.title} </h1>
            <div className="price">
              <div
                id="coupon"
                className={`${this.state.couponActive ? 'active' : ''}`}
              >
                Applied {getUrlParam('coupon', '0').toUpperCase()}
                <br />
                Original $50 saving {getUrlParam('percent', '0')}% OFF
              </div>
            </div>
            <div className="button-area">
              <a
                href={`${
                  this.state.couponActive
                    ? `${this.props.data.urlOld}?coupon_code=${getUrlParam(
                        'coupon',
                        '0'
                      ).toUpperCase()}`
                    : `${this.props.data.urlOld}`
                }`}
                className="button"
              >
                Enroll in Course for ${this.state.coursePrice}
              </a>
            </div>
          </div>
        </section>
        <section id="course-info">
          <div className="bg" />
          <div className="section-content">
            <div className="container">
              <div className="column">
                <img
                  src={courseLogoIMG}
                  alt={`${this.props.data.title} Logo`}
                  ref="logo"
                />
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
                  <img src={codeExampleIMG} alt="Code Example" ref="code" />
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
                  <img src={tiledToolIMG} alt="tiled program" ref="tool1" />
                </div>
                <div className="column">
                  <h1>Tiled</h1>
                  <p>Design and prototype your games levels</p>
                </div>
              </div>
              <div className="grid-container">
                <div className="column">
                  <img
                    src={shoeboxToolIMG}
                    alt="shoebox sprite application"
                    ref="tool2"
                  />
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
              <h2>Projects</h2>
              <h3>
                Learn to build your own apps <br />
                Not just follow an instructor
              </h3>
              <div className="info-area">
                <div className="info-column">
                  <h2>
                    Tic Tac Toe <br />
                    Championship
                  </h2>
                </div>
                <div className="img-column">
                  <div className="chartbg">
                    <img
                      src={iphonePreviewIMG}
                      alt="tictactoe game on iphone"
                      ref="project1"
                    />
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
              <div className="price">
                <div
                  id="coupon"
                  className={`${this.state.couponActive ? 'active' : ''}`}
                >
                  Applied {getUrlParam('coupon', '0').toUpperCase()}
                  <br />
                  Original ${this.props.data.price} saving {getUrlParam('percent', '0')}% OFF
                </div>
              </div>
              <div className="payment-grid">
                <div>
                  <a
                    href={`${
                      this.state.couponActive
                        ? `${this.props.data.urlOld}?coupon_code=${getUrlParam(
                            'coupon',
                            '0'
                          ).toUpperCase()}`
                        : `https://sso.teachable.com/secure/117955/checkout/909879/phaser-3-make-games-with-javascript-course`
                    }`}
                    className="button"
                  >
                    Enroll in Course for ${this.state.coursePrice}
                  </a>
                </div>
                <div>OR</div>
                <a
                  href={`${
                    this.state.couponActive
                      ? `https://codingphase.teachable.com/p/all-courses-subscription?coupon_code=${getUrlParam(
                          'coupon',
                          '0'
                        ).toUpperCase()}`
                      : `https://codingphase.teachable.com/p/all-courses-subscription`
                  }`}
                >
                  Sign up for a subscription and receive unlimited access to all
                  the courses{' '}
                  {getUrlParam('percent', '0') === '0'
                    ? ``
                    : `with ${getUrlParam('percent', '0')}% OFF`}
                </a>
              </div>
            </div>
          </div>
        </section>
        <Watchers />
      </div>
    )
  }
}

const IndexPage = ({ data, location }) => {
  const pageData = data.coursesDataJson.data.filter(
    course => course.slug === 'phaser-3-make-games-with-javascript-course'
  )[0]
   
  return (
    <Layout>
      <SEO
        title={pageData.title}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Page data={pageData} />
    </Layout>
  )
}
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
        urlOld
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
