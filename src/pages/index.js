import React from "react"
import styled from 'styled-components'
import Link from 'gatsby'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import StyledButton from '../components/StyledButton'
import BannerBackground from "../components/Home/BannerBackground"
import { Container } from "@material-ui/core"
import { TypographyH1 } from "../components/SharedStyledComponents"
import SecondSection from "../components/Home/SecondSection"
import ThirdSection from "../components/Home/ThirdSection"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
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
              <StyledButton component={Link} disableElevation variant="contained" color="primary" >
                Conheça o Aegro
              </StyledButton>
            </BannerWrapper>
          </Container>
        </BannerContainer>
      </BannerBackground>
      <SecondSection />
      <ThirdSection />
    </Layout>
  )
}

export const BannerContainer = styled.div`
  height: 100vh;
  display: flex;
  max-height: 1080px;
  min-height: 600px;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
`

export const BannerWrapper = styled.div`
  margin-top: 45px;
  margin-left: 12px;

  @media (min-width: 600px)
  {
    margin-left: 38px;
  }
`

export const FirstTitle = styled(TypographyH1)`
  margin: 0 auto 0 0;
  max-width: 600px;
`

export const SecondTitle = styled(TypographyH1)`
  margin-bottom: 55px;
  max-width: 600px;
`

export default IndexPage
