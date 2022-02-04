import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

const Navbar: React.FC = () => {
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
      <Link className='title' to="/">{ title }</Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar