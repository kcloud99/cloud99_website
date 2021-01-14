import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from 'styled-components'

import Layout from "../components/layout"
import Title from "../components/Title"
import SEO from "../components/seo"
import { FiChevronsDown } from "react-icons/fi"

const TestimonialsPage = () => (
  <Layout>
    <SEO title="testimonials" />
    <Title title="Testimonials page" description="get testimonials" />
  </Layout>
)

export default TestimonialsPage