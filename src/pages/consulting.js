import React from 'react';
import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FiChevronsUp } from "react-icons/fi"

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  .arrow-down {
    width: 0;
    height: 0;
    border-left: 50vw solid transparent;
    border-right: 50vw solid transparent;

    border-top: 100vh solid #3cb4cf;
  }

  .up-button {
    position: absolute;
    top: 3%;
    left: 47%;
  }
`

const ConsultingPage = () => (
  <Wrapper>
    <div className="arrow-down" />
    <div className="up-button">
      <AniLink cover direction="down" to="/" duration={3} bg="#3cb4cf">
        <FiChevronsUp size="4rem" style={{ margin: "0 auto" }} />
      </AniLink>
    </div>
  </Wrapper>
);

export default ConsultingPage