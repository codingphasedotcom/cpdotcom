import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header>
    <div className="logo">
      <Link to="/">{siteTitle}</Link>
    </div>
    <div className="menu">
      <Link to="/courses">Courses</Link>
      <Link to="/blog">Blog</Link>
      <Link to="https://discordapp.com/invite/weTKutq">Chat</Link>
      <Link to="https://codingphase.teachable.com/courses/enrolled">
        MembersArea
      </Link>
      <Link to="/contact">Contact</Link>
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
