import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { getUrlParam } from '../../components/GetParams'
import Watchers from '../../components/watchers.js'

// import ScrollReveal from 'scrollreveal'

import courseLogoIMG from '../../../assets/courses/wordpress_basics/course-logo.png'
import codeExampleIMG from '../../../assets/courses/wordpress_basics/code-example.png'
import toolAtomIMG from '../../../assets/courses/wordpress_basics/tool-atom.png'
import toolWorkbenchIMG from '../../../assets/courses/wordpress_basics/tool-workbench.png'
import previewLaptopProject1IMG from '../../../assets/courses/wordpress_basics/preview-laptop-project1.png'
import jumboBGIMG from '../../../assets/courses/wordpress_basics/jumbobg.png'
class Page extends Component {
  constructor() {
    super()
    this.state = {
      coursePrice: 50,
      couponActive: false,
    }
  }
  componentDidMount = () => {
    // fbq('track', 'ViewContent', {
    //   value: this.props.data.price,
    //   currency: 'USD',
    //   content_ids: 'build-any-site-into-a-wordpress-theme',
    // })
    this.setState(
      {
        coursePrice: this.props.data.price,
      },
      () => {
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
      }
    )
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
        delay: 500,
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
                Original ${this.props.data.price} saving
                {getUrlParam('percent', '0')}% OFF
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
                <h2>The #1 Content Management System</h2>
                <ul>
                  <li>Creating a blog</li>
                  <li>Creating Pages</li>
                  <li>Comments</li>
                  <li>User Authentication</li>
                  <li>Convert static to wordpress theme</li>
                  <li>REST API for content</li>
                  <li>Using PODS to use data</li>
                  <li>Build your portfolio into wordpress theme</li>
                  <li>
                    Deploy website to shared hosting like godaddy or namecheap
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="course-highlight">
          <div className="section-content">
            <div className="container">
              <h3>Modern Development</h3>
              <div className="grid-container">
                <div className="column">
                  <h1>PHP7</h1>
                  <p>Learn to create themes with the latest php 7 version</p>
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
                  <img src={toolAtomIMG} alt="atom program" ref="tool1" />
                </div>
                <div className="column">
                  <h1>Atom</h1>
                  <p>
                    Text editor with syntax highlighting to help write better
                    code
                  </p>
                </div>
              </div>
              <div className="grid-container">
                <div className="column">
                  <img
                    src={toolWorkbenchIMG}
                    alt="workbench program"
                    ref="tool2"
                  />
                </div>
                <div className="column">
                  <h1>Workbench</h1>
                  <p>We use workbench to learn and use mysql.</p>
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
                  <h2>Wordpress Portfolio Theme</h2>
                </div>
                <div className="img-column">
                  <div className="chartbg">
                    <img
                      src={previewLaptopProject1IMG}
                      alt="portfolio theme on laptop"
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
                  Original ${this.props.data.price} saving{' '}
                  {getUrlParam('percent', '0')}% OFF
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
                        : `${this.props.data.urlOld}`
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
    course => course.slug === 'build-any-site-into-a-wordpress-theme'
  )[0]

  return (
    <Layout>
      <SEO
        title={pageData.title}
        keywords={[`Wordpress`, `application`, `react`]}
      />
      <Page data={pageData} />
    </Layout>
  )
}
export const query = graphql`
  query WordpressBasicsPageQuery {
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
