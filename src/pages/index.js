import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header/header"
import Title from "../components/title/title"
import GlitchVideoContainer from "../components/container/glitchVideoContainer"

export default ({ data }) => {
  console.log(data);
  return (
    <div>
        <Header></Header>
        <Title></Title>
        <GlitchVideoContainer data={data}></GlitchVideoContainer>
    </div>
  )
}


export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            embed
          }
          fields {
              slug
          }
          excerpt
        }
      }
    }
  }
`

/*
export const query = graphql`
  query LwypPlaylist {
    ytPlaylist(id: { eq: "lwypPlaylist" }) {
      childrenYtVideo {
        id
        title
        description
      }
    }
  }
`*/