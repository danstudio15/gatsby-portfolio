/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Ramsay Beattie Blog`,
        short_name: `RB Blog`,
        start_url: `/`,
        background_color: `#202020`,
        theme_color: `#202020`,
        display: `standalone`,
        icon: `gatsby-icon.png`,
      }
    },
    "gatsby-plugin-offline",
  ],
  siteMetadata: {
    title: 'The Ramsay Beattie Blog',
    description: 'The Ramsay Beattie Blog',
  },
}
