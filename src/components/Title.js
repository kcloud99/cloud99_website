import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Wrap = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 15vw;
  margin: auto auto;
`

const Tit = styled.h1`
  font-size: 3rem;
  color: inherit;
  font-family: sans serif;
`

const Desc = styled.h2`
  font-size: 2rem;
  color: inherit;
  font-family: sans serif;
`

function Title(props) {
  return (
    <Wrap>
      <Tit>Cloud99</Tit>
      <Desc>Design & Consulting</Desc>
    </Wrap>
  )
}

Title.propTypes = {}

export default Title
