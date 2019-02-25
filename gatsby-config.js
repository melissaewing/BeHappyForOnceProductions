module.exports = {  
  siteMetadata: {
      title: `Title from siteMetadata`,
      twitterHandle: '@swashata',
      url: 'https://swas.io',
      
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