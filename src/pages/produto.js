import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'

const produto = () => {
  return (
    <Layout>
      <SEO title="Produto" />
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

export default produto
