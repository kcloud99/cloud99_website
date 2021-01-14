import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from 'styled-components'

import Layout from "../components/layout"
import Title from "../components/Title"
import SEO from "../components/seo"
import { FiChevronsDown } from "react-icons/fi"

const Wrap = styled.div`
  display: flex;
  height: auto;
  width: 100vw;
  margin: 0;
  margin-top: 30vh;
  padding: 0;
`

const Signup = styled.div`
  width: 50vw;
  height: 100%;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  flex-direction: column;
  font-family: 'Mitr', san-serif;
  text-align: center;

  h1 {
    font-weight: 200;
    font-size: 2.5rem;
  }
  h2 {
    font-weight: 600;
    font-size: 1.65rem;
    line-height: 2.5rem;
    color: pink;
  }
  h3 {
    font-family: 'Mitr', san-serif;
    font-weight: 300;
    font-size: 1.3rem;
  }
  button {
    width: 40%;
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 10px;
    background-color: transparent;
    border-color: pink;
    font-weight: 300;
    color: white;
    margin: 0 auto;
    font-family: 'Mitr', san-serif;
    margin-top: 20px;
    cursor: pointer;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrap>
      <Signup>
        <h1>Unlock your business' potential:</h1>
        <h2>Sign up today for a call that could change your business forever</h2>
        <h3>In 15 minutes - find that missing piece</h3>
        <AniLink swipe direction="up" to="/signup">
          <button>Signup Now</button>
        </AniLink>
      </Signup>
      <Title title="Cloud99" description="Designs & Consulting" />
    </Wrap>
    <div
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        top: "85%",
      }}
    >
      <AniLink swipe direction="up" to="/consulting">
        <FiChevronsDown size="4rem" style={{ margin: "0 auto" }} />
      </AniLink>
    </div>
  </Layout>
)

export default IndexPage
