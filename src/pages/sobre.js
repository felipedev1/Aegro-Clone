import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const sobre = () => {
  return (
    <Layout>
      <SEO title="Sobre" />
      <div style={{
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <h1>TO DO</h1>
        <p>Esta página está em construção  <span role="image">🚧</span></p>
      </div>
    </Layout>
  )
}

export default sobre
