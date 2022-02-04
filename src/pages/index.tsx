import { Link, graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css';
import { GatsbyImage, GatsbyImageProps, getImage, IGatsbyImageData } from "gatsby-plugin-image";

type GraphQlQueryResult = {
  projectList: {
    nodes: {
      frontmatter: {
        title: string;
        slug: string;
        featuredImg: IGatsbyImageData;
      }
      id: string;
    }[]
  }
}

const Home: React.FC<PageProps<GraphQlQueryResult>> = ({ data }) => {

  const projects = data.projectList.nodes

  const content: JSX.Element[] = projects.map(project => (
    <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
      <div className={styles.projectimage}>
        <GatsbyImage image={getImage(project.frontmatter.featuredImg)!} alt={''}/>
        <div className={styles.projectinfo}>
          <h3>{project.frontmatter.title}</h3>
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