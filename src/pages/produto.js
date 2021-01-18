import React from 'react'
import Layout from '../components/layout'
import FirstSection from '../components/Produto/FirstSection'
import SEO from '../components/seo'

const produto = () => {
  return (
    <Layout>
      <SEO title="Produto" />
      <FirstSection />
      <section id="recursos" style={{
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#777',
      }}>
        <h1>TO DO</h1>
        <p>Esta página está em construção  <span role="image">🚧</span></p>
      </section>
    </Layout>
  )
}

export default produto
