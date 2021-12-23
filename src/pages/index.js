import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Dan</h2>
          <h3>Design & Develop</h3>
          <p>Architect turned Software Engineer</p>
          <Link className={styles.btn} to='/projects'>My Portfolio Projects</Link>
        </div>
      </section>
    </Layout>

  )
}
