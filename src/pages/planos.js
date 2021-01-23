import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import FirstSection from '../components/Planos/FirstSection'
import SecondSection from '../components/Planos/SecondSection'

const planos = () => {
  return (
    <Layout>
      <SEO title="Planos" />
      <Header color="secondary" />
      <FirstSection />
      <SecondSection />
    </Layout>
  )
}

export default planos
