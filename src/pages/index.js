import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import Title from "../components/Title"
import SEO from "../components/seo"
// import { FiArrowDownCircle } from "react-icons/fi"
import { FiChevronsDown } from "react-icons/fi"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Title />
    <div
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        top: "80%",
      }}
    >
      <AniLink swipe direction="up" to="/services/">
        <FiChevronsDown size="4rem" style={{ margin: "0 auto" }} />
      </AniLink>
    </div>
  </Layout>
)

export default IndexPage
