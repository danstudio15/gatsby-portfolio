import { Link, graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Home = ({ data }) => {

  const projects = data.projectList.nodes

  return (
    <Layout>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div className={styles.projectimage}>
                <GatsbyImage image={getImage(project.frontmatter.featuredImg)}/>
                <div className={styles.projectinfo}>
                  <h3>{project.frontmatter.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
    </Layout>
  );
}
 
export default Home

export const query = graphql`
  query ProjectsPage {
    projectList: allMarkdownRemark (sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          slug
          featuredImg {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED,
                width: 1200,
              )
            }
          }
        }
        id
      }
    }
  }
`