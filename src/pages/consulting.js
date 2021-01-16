import React from 'react';
import styled from 'styled-components'
import Layout from "../components/layout"
import Title from "../components/Title"
import SEO from "../components/seo"
import PageNavBtn from '../components/PageNavBtn'

const Wrap = styled.div`
  display: flex;
  height: auto;
  width: 100vw;
  margin: 0;
  margin-top: 20vh;
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
  color: black;

  .container {
    width: 80%;
    height: 80%;
    border-radius: 10px;
    border-color: transparent;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin-left: 10px;
      text-align: left;
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
      font-family: 'Comic Neue', cursive;
    }

    .group {
      list-style-type: none;
      pading-inline-start: 0;
      margin-bottom: 0;

      &:nth-child(2) {
        margin-top: 40px;
      }
    }
    .subgroup {

      li::marker {
        ${'' /* content: '◇'; */}
        font-size: 1.5rem;
      }
    }
  }

  button {
    width: auto;
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 10px;
    background-color: transparent;
    border-color: black;
    font-weight: 300;
    color: black;
    margin: 0 auto;
    font-family: 'Comic Neue', cursive;
    margin-top: 20px;
    cursor: pointer;
  }
`

const ConsultingPage = () => (
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
      }}
    >
      <PageNavBtn direction="down" route="/" />
    </div>
    <Wrap>
      <Title title="It starts here" description="Expand your business. Increase your efficiency. Finally master your tech." align="left" />
      <Services>
        <div className="container">
          <h1>Here to help...</h1>
          <ul>
            <li className="group">
              <h3>Expand your online presence:</h3>
              <ul className="subgroup">
                <li><p>Website Design</p></li>
                <li><p>E-Commerce Store</p></li>
                <li><p>Lead Generation</p></li>
              </ul>
            </li>
            <li className="group">
              <h3>Optimize your systems:</h3>
              <ul className="subgroup">
                <li><p>Increase internal efficiency</p></li>
                <li><p>Automate internal systems</p></li>
                <li><p>Save man-hours and money</p></li>
              </ul>
            </li>
          </ul>
          <PageNavBtn direction="up" route="/signup" style={{zIndex: 99}}>
            <button>Schedule your call</button>
          </PageNavBtn>
        </div>
      </Services>
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
      <PageNavBtn direction="up" route="/testimonials" />
    </div>
  </Layout>
);

export default ConsultingPage