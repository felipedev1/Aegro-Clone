import React from "react"
import '../styles/pages/index.css'

import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="section" style={{
        height: '100vh',
        backgroundSize: "100% 100%"
      }}></section>
    </Layout>
  )
}

export default IndexPage
