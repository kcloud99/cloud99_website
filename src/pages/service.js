import React from "react"
import styled from "styled-components"
import { FiChevronsLeft } from "react-icons/fi"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import SEO from "../components/seo"
import Background from "../images/desk1.jpg"

const Wrapper = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
`

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.85);
`

const Service = props => (
  <Wrapper src={Background}>
    <Overlay>
      <SEO title="Service" />
      <AniLink
        swipe
        top="entry"
        to="/services/"
        direction="right"
        duration={1}
        style={{ display: "flex", alignItems: "center" }}
      >
        <FiChevronsLeft
          size="4rem"
          style={{ position: "fixed", top: "2vh", left: "1vw" }}
        />
      </AniLink>
      <h2 style={{ width: "100%", textAlign: "center" }}>
        {props.location.state.service.name}
      </h2>
    </Overlay>
  </Wrapper>
)

export default Service
