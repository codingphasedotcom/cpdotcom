import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const clickedHamburger = () => {}
const Header = ({ siteTitle }) => (
  <header>
    <div className="logo">
      <Link to="/">{siteTitle}</Link>
    </div>
    <div className="menu">
      <Link to="/courses">Courses</Link>
      <Link to="/blog">Blog</Link>
      <a href="https://discordapp.com/invite/weTKutq">Chat</a>
      <a href="https://codingphase.teachable.com/courses/enrolled">
        Members Area
      </a>
      <Link to="/contact">Contact</Link>
      <a
        href=""
        id="hamburger-icon"
        title="Menu"
        className="active"
        onClick={clickedHamburger}
      >
        <span class="line line-1" />
        <span class="line line-2" />
        <span class="line line-3" />
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
