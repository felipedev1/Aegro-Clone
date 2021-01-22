import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import SEO from '../components/seo'
import FirstSection from '../components/Sobre/FirstSection'
import FourthSection from '../components/Sobre/FourthSection'
import SecondSection from '../components/Sobre/SecondSection'
import ThirdSection from '../components/Sobre/ThirdSection'

const sobre = () => {
  return (
    <Layout>
      <SEO title="Sobre" />
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </Layout>
  )
}

export default sobre
