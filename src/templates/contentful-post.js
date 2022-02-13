import React from "react"
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import * as styles from '../styles/posts.module.css'

import Form from '../components/Form';


const ProjectDetails = ({ data }) => {

  const title = data.contentfulPostTest.title;
  const date = data.contentfulPostTest.date;
  const image = data.contentfulPostTest.featuredImage.gatsbyImageData;
  const markdown = data.contentfulPostTest.text.childMarkdownRemark.html;
  const extras = data.contentfulPostTest.extras;
  const dateText = new Date(date).toDateString();
  let content;

  // if (extras.hasOwnProperty('form')){
  //   content = <Form json={extras.form}/>
  // }

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
      {content}
    </Layout>
  )
}
 
export default ProjectDetails

export const query = graphql`
  query ProjectDetails($slug: String) {
    contentfulPostTest(slug: {eq: $slug}) {
      title
      date
      text {
        childMarkdownRemark {
          html
        }
      }
      extras {
        form {
          inputs {
            label
            type
            name
          }
          link
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
