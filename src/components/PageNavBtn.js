import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FiChevronsUp, FiChevronsDown } from "react-icons/fi"

export default function PageNavBtn({ direction, route, children }) {

  return (
    <AniLink swipe direction={direction} to={route} style={{zIndex: 99}}>
      {children ? children : direction === "up" ? <FiChevronsDown size="4rem" style={{ margin: "0 auto" }} /> : <FiChevronsUp size="4rem" style={{ margin: "10px auto" }} />}
    </AniLink>
  )
}