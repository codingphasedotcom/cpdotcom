import React, { Component } from 'react'
import Layout from '../../components/leadLayout'
import SEO from '../../components/seo'
import axios from 'axios'

import movableinkIMG from '../../../assets/logos/movableink.png'
import paypalIMG from '../../../assets/logos/paypal.png'
import sonyIMG from '../../../assets/logos/sony.png'
import timewarnerIMG from '../../../assets/logos/timewarner.png'
import universalIMG from '../../../assets/logos/universal.png'

class Page extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      emailAddress: '',
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
    setTimeout(() => {
      //www.youtube.com/codingphase?sub_confirmation=1
      https: window.location.href =
        'https://www.youtube.com/codingphase?sub_confirmation=1'
    }, 5000)
  }
  submitForm = event => {
    event.preventDefault()
    axios
      .post('https://app.convertkit.com/forms/884668/subscriptions', {
        first_name: this.state.firstName,
        email_address: this.state.emailAddress,
      })
      .then(function(response) {
        window.location.href = 'https://www.codingphase.com/'
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })
  }
  handleInputChange = event => {
    const name = event.target.name
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value

    this.setState({ [name]: value })
  }
  render() {
    return (
      <div id="lead-free-download">
        <div className="jumbo">
          <div className="container">
            <div className="grid thank-you">
              <div className="info">
                <h2>Thank You</h2>
                <h3>Go Check Your Email You Will Have a Link To The Course</h3>
                <p>
                  <a href="https://www.youtube.com/codingphase?sub_confirmation=1">
                    To Continue Getting Free Resources Click Here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="form-popup">
          <div className="popup-container">
            <form
              action="https://app.convertkit.com/forms/884668/subscriptions"
              className="seva-form formkit-form"
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
                className="formkit-input"
                aria-label="First Name"
                name="fields[first_name]"
                placeholder="First Name"
              />
              <input
                type="text"
                className="formkit-input"
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
