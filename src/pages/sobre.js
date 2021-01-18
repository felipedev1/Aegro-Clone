import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import FirstSection from '../components/Sobre/FirstSection'
import SecondSection from '../components/Sobre/SecondSection'

const sobre = () => {
  return (
    <Layout>
      <SEO title="Sobre" />
      <FirstSection />
      <SecondSection />
      <section style={{
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#777'
      }}>
        <h1>TO DO</h1>
        <p>Esta página está em construção  <span role="image">🚧</span></p>
      </section>
    </Layout>
  )
}

export default sobre
