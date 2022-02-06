import React from 'react'
import { Helmet } from "react-helmet"
import Navbar from './Navbar'
import '../styles/global.css'
import { graphql, useStaticQuery } from 'gatsby'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <div className="layout">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ title }</title>
      </Helmet>
      <Navbar />
      <div className="content">
        { children }
      </div>
      <footer/>
    </div>
  )
}


export default Layout