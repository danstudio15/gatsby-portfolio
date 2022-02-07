import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

const Navbar = () => {
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
    <nav>
      <div className='title'>
        <Link to="/">{ title }</Link>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar