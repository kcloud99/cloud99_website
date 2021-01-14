import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

const Wrap = styled.header`
  background: transparent;
  margin: 0;
`

const Header = ({ siteLogo }) => (
  <Wrap>
      {/* <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          width: "100px",
          height: "70px",
        }}
      >
        <img
          src={siteLogo}
          alt="logo"
          style={{ width: "inherit", height: "inherit" }}
        />
      </Link> */}
  </Wrap>
)

export default Header
