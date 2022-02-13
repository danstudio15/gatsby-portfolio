const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Articles {
      allContentfulPostTest {
        nodes {
          slug
        }
      }
    }
  `)

  data.allContentfulPostTest.nodes.forEach(node => {
    actions.createPage({
      path: '/'+ node.slug,
      component: path.resolve('./src/templates/contentful-post.js'),
      context: { slug: node.slug }
    })
  })
}