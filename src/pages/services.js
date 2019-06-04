import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

import SEO from "../components/seo"
// import Background from "../images/comp_image.jpg"
import Background from "../images/comp2.jpg"
// import Cover from "../images/mountains.jpg"
import { FiChevronsUp } from "react-icons/fi"
import { FiChevronRight } from "react-icons/fi"

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
const Section = styled.div`
  height: 50vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Row = styled.div`
  height: auto;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`

const Content = styled.div`
  border: 2px solid white;
  border-radius: 4px;
  width: 28vw;
  height: 25vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`

const Words = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10%;
  max-height: 20vh;

  h5 {
    margin-bottom: 5px;
    padding: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 5px 0;
    padding: 0;
    overflow: ellipses;
  }
`

const projects = [
  {
    name: "Tribe Pilot",
    type: "Mobile App",
    stack: "React Native, AWS AppSync, Apollo/GraphQL",
    link: "https://www.tribepilot.com",
  },
  {
    name: "nscale",
    type: "Microservices Platform",
    stack: "NodeJS, Kubernetes, Google Cloud",
    link: "https://www.nscale.io",
  },
  {
    name: "Pickup",
    type: "Mobile App",
    stack: "React Native, OAuth, Firebase",
    link: "https://www.cloud99designs.com",
  },
]

const services = [
  {
    name: "Engineering",
    description:
      "Specialty in Front-end engineering and React/React Native development",
    link: "https://www.tribepilot.com",
  },
  {
    name: "Technical Project Management",
    description:
      "Helping communication between business leaders and the developers who build the product",
    link: "https://www.nscale.io",
  },
  {
    name: "SMB Consulting",
    description:
      "Helping small businesses implement technology for better efficiency, productivity, and saving money",
    link: "https://www.cloud99designs.com",
  },
]

const Services = () => (
  <Wrapper src={Background}>
    <Overlay>
      <SEO title="Page two" />
      <Section>
        <h3>My Services</h3>
        <Row>
          {services.map(s => {
            return (
              <Content>
                <Words>
                  <h5>{s.name}</h5>
                  <p>
                    <strong>What I do:</strong> {s.description}
                  </p>
                </Words>
                <AniLink
                  swipe
                  // cover
                  top="entry"
                  to="/service/"
                  direction="left"
                  // bg={`url(${Cover}) center / cover no-repeat fixed padding-box content-box white`}
                  state={{ service: s }}
                  duration={1}
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FiChevronRight size="3rem" />
                </AniLink>
              </Content>
            )
          })}
        </Row>
      </Section>
      <Section>
        <h3>Current Projects</h3>
        <Row>
          {projects.map(s => {
            return <Content>{s.name}</Content>
          })}
        </Row>
        <AniLink swipe direction="down" to="/">
          <FiChevronsUp size="4rem" style={{ margin: "20 auto" }} />
        </AniLink>
      </Section>
    </Overlay>
  </Wrapper>
)

export default Services
