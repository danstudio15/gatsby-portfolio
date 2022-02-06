const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Articles {
      allContentfulPortfolioPost {
        nodes {
          slug
        }
      }
    }
  `)

  data.allContentfulPortfolioPost.nodes.forEach(node => {
    actions.createPage({
      path: '/'+ node.slug,
      component: path.resolve('./src/templates/project-details.js'),
      context: { slug: node.slug }
    })
  })
}
