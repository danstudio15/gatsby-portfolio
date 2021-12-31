import React from "react"
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import * as styles from '../styles/project-details.module.css'

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, category, date, featuredImg } = data.markdownRemark.frontmatter
  let dateText = new Date(date).toDateString();

  return (
    <Layout>
      <div className={styles.featured}>
        <div className={styles.details}>
          <h2>{title}</h2>
          <h4>{dateText}</h4>
          <h3>{category}</h3>
        </div>
        <GatsbyImage image={getImage(featuredImg)} />
      </div>
      <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}
 
export default ProjectDetails

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        category
        title
        date
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH,
              aspectRatio: 2,
              transformOptions: {
                fit: COVER
              }
            )
          }
        }
      }
    }
  }
`