/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
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
  ],
  siteMetadata: {
    title: 'dancooling',
    description: 'Daniel Cooling Portfolio Website',
  },
}
