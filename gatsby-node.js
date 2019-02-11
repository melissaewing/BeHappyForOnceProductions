const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages/video` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/video-post.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
    })
  }


  /**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 /*
const crypto = require('crypto')
const ypi = require('youtube-playlist-info')
const YT_KEY = require('./client_secrets.json')['yt_key']
const LWyP = 'PLF8WgaD4xmjWuh7FTYTealxehOuNor_2S'

exports.sourceNodes = async ({
  boundActionCreators,
  getNode,
  hasNodeChanged,
}) => {
  const { createNode } = boundActionCreators
  const makeNode = node => {
    node.internal.contentDigest = crypto
      .createHash('md5')
      .update(JSON.stringify(node))
      .digest('hex')

    createNode(node)
  }

  const items = await ypi(YT_KEY, LWyP)

  let ytNode = {
    id: 'youtube',
    children: ['ytPlaylists'],
    parent: null,
    internal: {
      type: 'youtube',
    },
  }

  let playlistsNode = {
    id: 'ytPlaylists',
    parent: 'youtube',
    children: ['lwypPlaylist'],
    internal: {
      type: 'ytPlaylists',
    },
  }

  let lwypNode = {
    id: 'lwypPlaylist',
    parent: 'ytPlaylists',
    children: [],
    internal: {
      type: 'ytPlaylist',
    },
  }

  lwypNode.children = items.map(
    ({ title, description, resourceId, thumbnails, position }) => {
      const id = `ytVideo-${resourceId.videoId}`
      makeNode({
        id,
        title,
        description,
        thumbnails,
        position,
        resourceId,
        internal: {
          type: 'ytVideo',
        },
        parent: 'lwypPlaylist',
        children: [],
      })
      return id
    }
  )

  makeNode(lwypNode)
  makeNode(playlistsNode)
  makeNode(ytNode)

  // makeNode(lwypNode)

  return
}*/








/*

// gatsby-node.js
 
// require library
const ypi = require('youtube-playlist-info')
// read my API key
const YT_KEY = require('./client_secrets.json')['yt_key']
// hardcode ID of my playlist for now
const LWyP = 'PLF8WgaD4xmjWuh7FTYTealxehOuNor_2S'
 
exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators
  const items = await ypi(YT_KEY, LWyP)
 
 // gatsby-node


const makeNode = node => {
  node.internal.contentDigest = crypto
    .createHash('md5')
    .update(JSON.stringify(node))
    .digest('hex')

  createNode(node)
}
 
 let lwypNode = {
  id: 'lwypPlaylist',
  parent: 'ytPlaylists',
  children: [],
  internal: {
    type: 'ytPlaylist',
  },
}

lwypNode.children = items.map(
  ({ title, description, resourceId, thumbnails, position }) => {
    const id = `ytVideo-${resourceId.videoId}`
    makeNode({
      id,
      title,
      description,
      thumbnails,
      position,
      resourceId,
      internal: {
        type: 'ytVideo',
      },
      parent: 'lwypPlaylist',
      children: [],
    })
    return id
  }
)

makeNode(lwypNode)
}


*/