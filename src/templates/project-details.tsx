import React from "react"
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import * as styles from '../styles/project-details.module.css'

type GraphQlQueryResult = {
  markdownRemark: {
    html: string;
    frontmatter: {
      title: string;
      date: string;
      slug: string;
      featuredImg: IGatsbyImageData;
    }
    id: string;
  }
}

const ProjectDetails: React.FC<PageProps<GraphQlQueryResult>> = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, date, featuredImg } = data.markdownRemark.frontmatter;
  const dateText = new Date(date).toDateString();

  return (
    <Layout>
      <div className={styles.featured}>
        <div className={styles.details}>
          <h2>{title}</h2>
          <h4>{dateText}</h4>
        </div>
        <GatsbyImage image={getImage(featuredImg)!} alt={""} />
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