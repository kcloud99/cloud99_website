import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteLogo }) => (
  <header
    style={{
      background: `transparent`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        width: '100vw',
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          width: '50px',
          height: '50px',
        }}
      >
        <img src={siteLogo} alt="logo" style={{ width: 'inherit', height: 'inherit' }} />
      </Link>
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
