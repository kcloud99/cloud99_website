import React from "react"
import styled from "styled-components"

const Wrap = styled.div`
  width: 50vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({align}) => (align === "left" ? "flex-start" : "flex-end")};
  padding: ${({align}) => (align === "left" ? "0 0 0 10vw" : "0 15vw 0 0")};
  margin: auto auto;
  font-family: 'Permanent Marker', cursive;
`

const Tit = styled.h1`
  font-size: 3.3rem;
  color: inherit;
  width: auto;
  font-family: 'Permanent Marker', cursive;
`

const Desc = styled.h2`
  font-size: 2.3rem;
  color: pink;
  width: auto;
  text-align: ${({align}) => (align === "left" ? "flex-start" : "flex-end")};
  font-family: 'Permanent Marker', cursive;
  line-height: 3rem;
`

function Title({ title, description, align }) {
  return (
    <Wrap align={align}>
      <Tit>{title}</Tit>
      <Desc align={align}>{description}</Desc>
    </Wrap>
  )
}

Title.propTypes = {}

export default Title
