import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from 'styled-components'

import Layout from "../components/layout"
import Title from "../components/Title"
import SEO from "../components/seo"
import { FiChevronsDown } from "react-icons/fi"

const SignupPage = () => {

  return (
    <Layout>
      <SEO title="signup" />
      <Title title="Signup page" description="Add form" />
    </Layout>
  )
}

export default SignupPage