import React, { Component } from 'react'
import { Link } from 'gatsby'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      mobileMenuActive: false,
    }
  }
  componentDidMount() {}
  clickedHamburger = () => {
    // var element = document.getElementById("myDIV");
    this.setState({ mobileMenuActive: !this.state.mobileMenuActive })
  }

  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <Link to="/">{this.props.siteTitle}</Link>
          </div>
          <div className="menu">
            <a href="/testimonials">Reviews</a>
            <a href="/courses">All Courses</a>
            {/* <Link to="/blog">Blog</Link> */}
            <a href="/timeline">Timeline</a>
            <a href="/blog">Blog</a>
            <a href="https://www.devoutlet.com" target="new">
              Store
            </a>
            <a href="https://discordapp.com/invite/weTKutq">Chat</a>
            <a href="https://codingphase.teachable.com/courses/enrolled">
              My Courses
            </a>
            {/* <Link to="/contact">Contact</Link> */}
            <div
              id="hamburger-icon"
              title="Menu"
              className={this.state.mobileMenuActive ? 'active' : ''}
              onClick={this.clickedHamburger}
            >
              <span className="line line-1" />
              <span className="line line-2" />
              <span className="line line-3" />
            </div>
          </div>
        </header>
        <div
          id="mobileMenu"
          className={this.state.mobileMenuActive ? 'active' : ''}
        >
          <a href="/testimonials">Reviews</a>
          <a href="/courses">All Courses</a>
          <a href="/timeline">Timeline</a>
          <a href="/blog">Blog</a>
          <a href="https://www.devoutlet.com" target="new">
            Store
          </a>
          <a href="https://discordapp.com/invite/weTKutq">Chat</a>
          <a href="https://codingphase.teachable.com/courses/enrolled">
            My Courses
          </a>
          {/* <Link to="/contact">Contact</Link> */}
        </div>
      </div>
    )
  }
}

export default Header
