import React from 'react';
import styled from 'styled-components'
import Layout from "../components/layout"
import Title from "../components/Title"
import SEO from "../components/seo"
import PageNavBtn from '../components/PageNavBtn'
import Quotes from '../images/quotes.png'

const Wrap = styled.div`
  display: flex;
  height: auto;
  width: 100vw;
  margin: 0;
  margin-top: 50px;
  padding: 0;
`

const Services = styled.div`
  width: 50vw;
  height: 100%;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Comic Neue', cursive;
  text-align: center;
  color: white;
  align-items: center;

  blockquote {
    margin-left: 10px;
    text-align: left;
    font-family: 'Comic Neue', cursive;
  }

  h1 {
    font-weight: 500;
    font-size: 2.5rem;
    font-family: 'Comic Neue', cursive;
  }
  h3 {
    font-weight: 300;
    padding-left: 0;
    margin-left: 10px;
    text-align: left;
    font-size: 2rem;
    font-family: 'Comic Neue', cursive;
  }

  .group {
    margin-top: 40px;
  }
  .group::marker {
    content: none;
    font-size: 2.5rem;
  }
  .subgroup::marker {
    content: url(${Quotes});
    font-size: 1rem;
    color: white;
  }

  button {
    width: auto;
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 10px;
    background-color: transparent;
    border-color: white;
    font-weight: 300;
    color: white;
    margin: 0 auto;
    font-family: 'Comic Neue', cursive;
    margin-top: 20px;
    cursor: pointer;
  }
`

const TestimonialsPage = () => (
  <Layout>
    <SEO title="consulting" />
    <div
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        top: "3%",
        margin: "0"
      }}
    >
      <PageNavBtn direction="down" route="/consulting" />
    </div>
    <Wrap>
      <Services>
        <ul>
          <li className="group">
            <h3>Pam - Owner of Slate Clothing</h3>
            <ul>
              <li className="subgroup"><blockquote>Kyle took my business to a whole new level. I had only ever thought briefly about expanding out of my brick and mortar into the online space, but I had no idea where to start, that's where Kyle and Cloud99 Consulting came along. Bringing my store online has allowed me to expand my offering to a much larger audience and in the future, the sky is the limit.</blockquote></li>
            </ul>
          </li>
          <li className="group">
            <h3>Mike - Owner of Sound Pacific RV</h3>
            <ul>
              <li className="subgroup"><blockquote>Cloud99 Designs completely changed the way that we attack our business in the modern age. From lead generation and sales to our internal systems, utilizing modern technology allows us to increase revenues and lower costs over every part of our organization.</blockquote></li>
            </ul>
          </li>
        </ul>
        <PageNavBtn direction="up" route="/signup">
          <button>Ready to talk?</button>
        </PageNavBtn>
      </Services>
      <Title title="A few others..." description="Who have taken the leap" align="left" />
    </Wrap>
    <div
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        top: "87%",
      }}
    >
      <PageNavBtn direction="up" route="/signup" />
    </div>
  </Layout>
);

export default TestimonialsPage