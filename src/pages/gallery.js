import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header/header"
import VideoGallery from "../components/video/videoGallery";

export default ({ data }) => {
  return (
  <div>
      <Header></Header>
      <VideoGallery data={data}/>
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
          html
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