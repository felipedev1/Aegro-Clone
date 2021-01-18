import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { Container, Typography } from '@material-ui/core'
import { HiOutlineArrowDown } from 'react-icons/hi'
import StyledButton from '../StyledButton'

import { Link } from 'gatsby'
import AnchorScrollButton from '../AnchorScrollButton'

const FirstSection = () => {
  const {desktopBackground, mobileBackground} = useStaticQuery(
    graphql`
      query {
        desktopBackground: file(relativePath: { eq: "hero-background.webp" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        mobileBackground: file(relativePath: { eq: "hero-mobile-background.webp" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 490) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const sources = [
    mobileBackground.childImageSharp.fluid,
    {
      ...desktopBackground.childImageSharp.fluid,
      media: `(min-width: 491px)`,
    }
  ]

  return (
    <BackgroundImage
      Tag="section"
      fluid={sources}
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
            <AnchorScrollButton compontent={Link} scrollTo="#manifesto" >
              <HiOutlineArrowDown size={24} />
            </AnchorScrollButton>
          </BannerWrapper>
        </Container>
      </BannerContainer>
    </BackgroundImage>
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
