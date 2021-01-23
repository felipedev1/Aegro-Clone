import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Container, Typography } from '@material-ui/core'
import StyledButton from '../StyledButton'
import { ContentWrapper } from './styles'

const SecondSection = () => {

  const {desktopBackground, mobileBackground} = useStaticQuery(
    graphql`
      query {
        desktopBackground: file(relativePath: { eq: "bg-planos.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        mobileBackground: file(relativePath: { eq: "bg-planos-mobile.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 360) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

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
      <Container maxWidth="lg">
        <StyledContentWrapper>
          <Typography variant="h1" component="h1" style={{textAlign: 'center'}}>
            Gerencie toda&nbsp;a
            <br/>
            propriedade com Aegro.
          </Typography>
          <StyledButton component={Link} to="/contato"
            variant="contained"
            color="secondary"
          >
            Fale conosco
          </StyledButton>
        </StyledContentWrapper>
      </Container>
    </BackgroundImage>
  )
}

const StyledContentWrapper = styled(ContentWrapper)`
  height: 293px;

  @media (min-width: 600px) {
    height: 474px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      margin-bottom: 48px;
    }
  }
`

export default SecondSection
