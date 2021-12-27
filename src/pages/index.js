<<<<<<< Updated upstream
import { Link } from "gatsby"
import React from "react"
=======
import React from "react"
import { Link } from 'gatsby'
>>>>>>> Stashed changes
import Layout from "../components/Layout"
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
<<<<<<< Updated upstream
          <h2>Dan</h2>
          <h3>Design & Develop</h3>
          <p>Architect turned Software Engineer</p>
          <Link className={styles.btn} to='/projects'>My Portfolio Projects</Link>
        </div>
=======
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{ maxWidth: '100%' }} />
>>>>>>> Stashed changes
      </section>
    </Layout>

  )
}
