const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daniel Cooling Portfolio Website`,
        short_name: `DC Porfolio`,
        start_url: `/`,
        background_color: `#202020`,
        theme_color: `#202020`,
        display: `standalone`,
        icon: `logo.jpg`,
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `zay45aq4xb8n`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
  siteMetadata: {
    title: 'dancooling',
    description: 'Daniel Cooling Portfolio Website',
  },
}
