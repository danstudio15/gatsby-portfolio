import React from 'react'
import { Helmet } from "react-helmet"
import '../styles/global.css'
import { graphql, Link, useStaticQuery } from 'gatsby'

const Layout = ({children, title = ''}) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const titleContent = (title ==='') ? 
  <Link to='/'>{ data.site.siteMetadata.title }</Link> : <h1>{ title }</h1>;


  return (
    <div className="layout">

      <Helmet>
        <meta charSet="utf-8" />
        <title>{ title }</title>
      </Helmet>

      <nav>
        <div className='title'>
          {titleContent}
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <div className="content">
        { children }
      </div>

      <footer/>

    </div>
  )
}

export default Layout