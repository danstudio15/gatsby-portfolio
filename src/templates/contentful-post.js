import React from "react"
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import * as styles from '../styles/posts.module.css'


const ProjectDetails = ({ data }) => {

  const title = data.contentfulDancoolingPost.title;
  const date = data.contentfulDancoolingPost.date;
  const image = data.contentfulDancoolingPost.featuredImage.gatsbyImageData;
  const markdown = data.contentfulDancoolingPost.text.childMarkdownRemark.html;
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
      <div className={styles.html} dangerouslySetInnerHTML={{ __html: markdown }}/>
    </Layout>
  )
}
 
export default ProjectDetails

export const query = graphql`
  query ProjectDetails($slug: String) {
    contentfulDancoolingPost(slug: {eq: $slug}) {
      title
      date
      text {
        childMarkdownRemark {
          html
        }
      }
      featuredImage {
        gatsbyImageData(
          layout: FULL_WIDTH,
          aspectRatio: 2,
          placeholder: BLURRED
        )
      }
    }
  }
`
