/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Logo from "../images/logo.png"
import Background from "../images/hero.jpg"

import Header from "./header"
import "./layout.css"

const Wrapper = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  width: 100vw;
  min-height: 100vh;
`

const Overlay = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background-color: rgba(11, 77, 138, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Wrapper src={Background}>
        <Overlay>
          {/* <Header /> */}
          <main>{children}</main>
        </Overlay>
      </Wrapper>
    )}
  />
)

export default Layout
