import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledButton from '../components/StyledButton'
import BannerBackground from "../components/Home/BannerBackground"
import { Container } from "@material-ui/core"
import { TypographyH1 } from "../components/sharedStyledComponents"
import SecondSection from "../components/Home/SecondSection"
import ThirdSection from "../components/Home/ThirdSection"
import FourthSection from "../components/Home/FourthSection"
import FifthSection from "../components/Home/FifthSection";
import SixthSection from "../components/Home/SixthSection";
import SeventhSection from "../components/Home/SeventhSection";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <BannerBackground>
        <BannerContainer>
          <Container maxWidth="lg">
            <BannerWrapper>
              <FirstTitle variant="h1" component="h1">
                Evoluir a agricultura
                <br/>
                é o que nos move.
              </FirstTitle>
              <SecondTitle variant="h1" component="h1">
                Por isso, somos parceiros de quem produz.
              </SecondTitle>
              <ButtonToApp to="/produto" variant="contained" color="primary" >
                Conheça o Aegro
              </ButtonToApp>
            </BannerWrapper>
          </Container>
        </BannerContainer>
      </BannerBackground>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
    </Layout>
  )
}

const BannerContainer = styled.div`
  height: 100vh;
  display: flex;
  max-height: 1080px;
  min-height: 600px;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
`

const BannerWrapper = styled.div`
  margin-top: 45px;
  margin-left: 12px;

  @media (min-width: 600px)
  {
    margin-left: 38px;
  }
`

const FirstTitle = styled(TypographyH1)`
  margin: 0 auto 0 0;
  max-width: 600px;

  @media (max-width: 959.95px) {
    margin-top: 100px;
    margin-bottom: 20px;
  }
`

const SecondTitle = styled(TypographyH1)`
  margin-bottom: 55px;
  max-width: 600px;

  @media (max-width: 959.95px) {
    margin-bottom: 90px;
  }
`

const ButtonToApp = styled(StyledButton)`
  @media (max-width: 959.95px) {
    font-size: 18px;
    padding-top: 7px;
    padding-left: 30px;
    padding-right: 30px;
    letter-spacing: 2.4px;
    padding-bottom: 7px;
  }
`

export default IndexPage
