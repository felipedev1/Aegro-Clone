import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout"
import SEO from "../components/seo"

import FirstSection from "../components/Home/FirstSection";
import SecondSection from "../components/Home/SecondSection"
import ThirdSection from "../components/Home/ThirdSection"
import FourthSection from "../components/Home/FourthSection"
import FifthSection from "../components/Home/FifthSection";
import SixthSection from "../components/Home/SixthSection";
import SeventhSection from "../components/Home/SeventhSection";
import Header from "../components/header";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
    </Layout>
  )
}



export default IndexPage
