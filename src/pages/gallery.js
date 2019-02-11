import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header/header"
import Thumb from "../components/video/thumb"

import "../styles/gallery.css"

export default ({ data }) => {
  return (
  <div>
    <Header></Header>
     <div className="galleryContainer">
        <h1>
          Gallery
        </h1>
        <div className="gallery">
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <Thumb key={node.id} embed={node.frontmatter.embed} slug={node.fields.slug} title={node.frontmatter.title}></Thumb>
        ))}
        </div>
    </div>
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