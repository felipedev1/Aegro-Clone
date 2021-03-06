import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { Container, Typography } from '@material-ui/core'
import StyledButton from '../StyledButton'


const FirstSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "background.webp" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <StyledBackgroundSection
      Tag="section"
      fluid={imageData}
      backgroundColor={`#00C65E`}
    >
      <BannerContainer>
        <Container maxWidth="lg">
          <BannerWrapper>
            <FirstTitle variant="h1" component="h1">
              Evoluir a agricultura
                <br />
                é o que nos move.
              </FirstTitle>
            <SecondTitle variant="h1" component="h1">
              Por isso, somos parceiros de quem produz.
              </SecondTitle>
            <ButtonToApp component={Link} to="/produto" variant="contained" color="primary" >
              Conheça o Aegro
            </ButtonToApp>
          </BannerWrapper>
        </Container>
      </BannerContainer>
    </StyledBackgroundSection>
  )
}

const StyledBackgroundSection = styled(BackgroundImage)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  opacity: 0.99;
`

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

const FirstTitle = styled(Typography)`
  margin: 0 auto 0 0;
  max-width: 600px;

  @media (max-width: 959.95px) {
    margin-top: 100px;
    margin-bottom: 20px;
  }
`

const SecondTitle = styled(Typography)`
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

export default FirstSection
