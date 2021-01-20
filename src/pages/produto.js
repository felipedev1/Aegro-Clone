import React from 'react'
import Layout from '../components/layout'
import FirstSection from '../components/Produto/FirstSection'
import FourthSection from '../components/Produto/FourthSection'
import SecondSection from '../components/Produto/SecondSection'
import ThirdSection from '../components/Produto/ThirdSection'
import SEO from '../components/seo'

const produto = () => {
  return (
    <Layout>
      <SEO title="Produto" />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <section style={{
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
