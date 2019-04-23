module.exports = {  
  siteMetadata: {
      title: `Be Happy For Once`,
      url: 'https://behappyforonce.com',
      
  },
  pathPrefix: '/', // Adding path for static files
  plugins: [    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
      name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`

  ],
}