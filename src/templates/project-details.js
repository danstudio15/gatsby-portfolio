import React from "react"
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import * as styles from '../styles/project-details.module.css'

const ProjectDetails = ({ data }) => {
  const title = data.contentfulPortfolioPost.title;
  const date = data.contentfulPortfolioPost.date;
  const image = data.contentfulPortfolioPost.featuredImage.gatsbyImageData;
  const text = data.contentfulPortfolioPost.text.text;
  const dateText = new Date(date).toDateString();

  return (
    <Layout>
      <div className={styles.featured}>
        <div className={styles.details}>
          <h2>{title}</h2>
          <h4>{dateText}</h4>
        </div>
        <GatsbyImage image={getImage(image)} alt={""} />
      </div>
      <div className={styles.html}>
        <p>{text}</p>
      </div>
    </Layout>
  )
}
 
export default ProjectDetails

export const query = graphql`
  query ProjectDetails($slug: String) {
    contentfulPortfolioPost(slug: {eq: $slug}) {
      title
      date
      text {
        text
      }
      featuredImage {
        gatsbyImageData(
          layout: FULL_WIDTH,
          aspectRatio: 2,
        )
      }
    }
  }
`
