import React from 'react'
<<<<<<< Updated upstream

export default function NotFound() {
    return (
        <div>
            <h2>404</h2>
            <p>Sorry Page Doesn't Exist</p>
        </div>
    )
}
=======
import Layout from '../components/Layout'

const NotFound = () => {
  return (
    <Layout>
      <div>
        <h2>404</h2>
        <p>Sorry, that page doesn't exist (yet)!</p>
      </div>
    </Layout>
  );
}
 
export default NotFound
>>>>>>> Stashed changes
