import React, { Component } from 'react'
import Layout from '../../components/leadLayout'
import SEO from '../../components/seo'

import movableinkIMG from '../../../assets/logos/movableink.png'
import paypalIMG from '../../../assets/logos/paypal.png'
import sonyIMG from '../../../assets/logos/sony.png'
import timewarnerIMG from '../../../assets/logos/timewarner.png'
import universalIMG from '../../../assets/logos/universal.png'

class Page extends Component {
  constructor() {
    super()
    this.state = {
      coursePrice: 50,
      couponActive: false,
      popupOpen: false,
    }
  }
  componentDidMount = () => {
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
    })
  }
  render() {
    return (
      <div id="lead-free-download">
        <div className="jumbo">
          <div className="container">
            <div className="grid">
              <div className="image">
                <img src="/img/leads/joe.png" />
                <h3>Some of the companies that hired my students</h3>
                <div className="logos">
                  <div className="logo">
                    <img src={movableinkIMG} alt="" />
                  </div>
                  <div className="logo">
                    <img src={paypalIMG} alt="" />
                  </div>
                  <div className="logo">
                    <img src={universalIMG} alt="" />
                  </div>
                  <div className="logo">
                    <img src={timewarnerIMG} alt="" />
                  </div>
                  <div className="logo">
                    <img src={sonyIMG} alt="" />
                  </div>
                </div>
              </div>
              <div className="info">
                <h2>
                  Do You Have What It Takes To Become A Developer? Let Me Prove
                  It To You!
                </h2>
                <h3>
                  I'm willing to bet money that I can make you into a web
                  developer!
                </h3>
                <p>
                  I'm going to give you a short course just to show you how easy
                  it is to build your first website. This course you can also
                  take it as a personal test to see if you are really interested
                  in becoming a developer. I say this because I know people get
                  excited when they see the high paying jobs 80k+ with no
                  experience or degreee but can you really become a developer?
                  Are you even interested in this type of work? Well this course
                  will help you answer that.
                </p>
                <div className="button">Send Me The Free Course</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-popup">
          <div className="popup-container">
            <form
              action="https://app.convertkit.com/forms/884668/subscriptions"
              class="seva-form formkit-form"
              method="post"
              data-sv-form="884668"
              data-uid="438d9d97c2"
              data-format="inline"
              data-version="5"
              min-width=""
            >
              <p>
                Enter a valid email because I will send you the course to your
                email
              </p>
              <input
                type="text"
                class="formkit-input"
                aria-label="First Name"
                name="fields[first_name]"
                placeholder="First Name"
              />
              <input
                type="text"
                class="formkit-input"
                name="email_address"
                placeholder="Your email address"
                required=""
              />
              <button type="submit">submit</button>
              <div className="policy">
                Privacy Policy: We hate SPAM and promise to keep your email
                address safe
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const IndexPage = ({ data, location }) => {
  return (
    <Layout>
      <SEO
        title="Can You Become a Developer?"
        keywords={[`Wordpress`, `application`, `react`]}
      />
      <Page />
    </Layout>
  )
}

export default IndexPage
