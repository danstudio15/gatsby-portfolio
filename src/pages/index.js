import { Link, graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const Home = ({ data }) => {

  const projects = data.projectList.nodes;

  const content = projects.map(project => (
    <Link to={"/" + project.slug} key={project.id}>
      <div className={styles.projectimage}>
        <GatsbyImage image={getImage(project.featuredImage.gatsbyImageData)} alt={''}/>
        <div className={styles.projectinfo}>
          <h3>{project.title}</h3>
        </div>
      </div>
    </Link>
  ));

  return (
    <Layout>
        <div className={styles.projects}>
          {content}
        </div>
    </Layout>
  );
}
 
export default Home

export const query = graphql`
  query ProjectsPage {
    projectList: allContentfulPortfolioPost (sort: {fields: date, order: DESC}) {
      nodes {
        slug
        title
        featuredImage {
          gatsbyImageData(layout: CONSTRAINED, width: 1200)
        }
      }
    }
  }
`
