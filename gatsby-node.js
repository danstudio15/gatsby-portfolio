const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Articles {
      allContentfulDancoolingPost {
        nodes {
          slug
        }
      }
    }
  `)

  data.allContentfulDancoolingPost.nodes.forEach(node => {
    actions.createPage({
      path: '/'+ node.slug,
      component: path.resolve('./src/templates/contentful-post.js'),
      context: { slug: node.slug }
    })
  })
}