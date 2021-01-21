import React from 'react'
import Layout from '../components/layout'
import FirstSection from '../components/Produto/FirstSection'
import SecondSection from '../components/Produto/SecondSection'
import ThirdSection from '../components/Produto/ThirdSection'
import FourthSection from '../components/Produto/FourthSection'
import FifthSection from '../components/Produto/FifthSection'
import SEO from '../components/seo'

const produto = () => {
  return (
    <Layout>
      <SEO title="Produto" />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </Layout>
  )
}

export default produto
