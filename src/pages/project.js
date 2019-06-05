import React, { Fragment } from "react"
import styled from "styled-components"
import { FiChevronsLeft } from "react-icons/fi"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import SEO from "../components/seo"
import Background from "../images/desk1.jpg"
import tribePilot from "../images/tribepilot.png"
import pickup from "../images/pickup.png"
import nscale from "../images/nscale.png"

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
  display: flex;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
`

const Body = styled.div`
  border: 2px solid white;
  border-radius: 5px;
  height: 70vh;
  width: 45vw;
  margin-left: 5vw;
  padding: 20px 50px;
`

const Image = styled.img`
  max-width: 40vw;
  max-height: 40vh;
`

const Project = props => {
  const { location } = props

  if (!location.state) {
    return <h1>Sorry this page doesn't seem to be working</h1>
  }

  let pic
  switch (location.state.project.name) {
    case "Tribe Pilot":
      pic = tribePilot
      break
    case "nscale":
      pic = nscale
      break
    case "Pickup":
      pic = pickup
      break
    default:
      pic = ""
      break
  }

  return (
    <Wrapper src={Background}>
      <Overlay>
        <SEO title="Service" />
        <AniLink
          swipe
          top="entry"
          to="/services/"
          direction="right"
          duration={1}
          style={{
            display: "flex",
            alignItems: "center",
            position: "fixed",
            top: "2vh",
            left: "1vw",
          }}
        >
          <FiChevronsLeft size="4rem" />
        </AniLink>
        <Column>
          <Body>
            <h2 style={{ width: "100%", textAlign: "center" }}>
              {location.state.project
                ? location.state.project.name
                : "Not sure why... But cant retrieve name at this time"}
            </h2>
          </Body>
        </Column>
        <Column>
          <h2 style={{ width: "100%", textAlign: "center" }}>
            {location.state.project ? (
              <a href="https://www.tribepilot.com" target="_blank">
                <h2>{location.state.project.name}</h2>
                <Image src={pic} />
              </a>
            ) : (
              "Not sure why... But cant retrieve name at this time"
            )}
          </h2>
        </Column>
      </Overlay>
    </Wrapper>
  )
}

export default Project
