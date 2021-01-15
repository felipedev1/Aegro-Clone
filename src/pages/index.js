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

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <BannerBackground>
        <BannerContainer>
          <Container maxWidth="lg">
            <BannerWrapper>
              <TypographyH1 variant="h1" component="h1">
                Evoluir a agricultura
                <br/>
                é o que nos move.
              </TypographyH1>
              <SecondTypographyH1 variant="h1" component="h1">
                Por isso, somos parceiros de quem produz.
              </SecondTypographyH1>
              <StyledButton component={Link} disableElevation variant="contained" color="primary" >
                Conheça o Aegro
              </StyledButton>
            </BannerWrapper>
          </Container>
        </BannerContainer>
      </BannerBackground>
      <SecondSection />
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

export const SecondTypographyH1 = styled(TypographyH1)`
  margin-bottom: 55px;
`

export default IndexPage
