import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header/header"
import Video from "../components/video/video"
//import videoStyle from "../components/video/video.module.css"

import Share from "../components/share/Share"

export default ({ data }) => {
  const {
		post: {
			html,
			frontmatter: { title, date, embed, tags },
			fields: { slug },
		},
		site: {
			siteMetadata: { url, twitterHandle },
		},
	} = data;
  //const post = data.markdownRemark;
  //const metaData = data.site.siteMetadata;
  console.log(data);
  return (
    <div>
    {/*<Header></Header>
    <div>
      <div className={videoStyle.videoContainer}>
        <Link to="../../">Back to videos...</Link>
        <h1>{title}</h1>
        <Video embed={embed}></Video>
        <div className={videoStyle.info} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <Share
        url={`${url}${slug}`}
        title={title}
        twitterHandle={twitterHandle}
        tags={tags}
      ></Share> 
    </div>*/}
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        url
        twitterHandle
      }
    }
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        embed
        tags
      }
      fields {
        slug
      }
    }
  }
`