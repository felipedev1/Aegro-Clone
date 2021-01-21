import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Typography } from '@material-ui/core'
import StyledButton from '../StyledButton'

const FifthSection = () => {

  const {desktopBackground, mobileBackground} = useStaticQuery(
    graphql`
      query {
        desktopBackground: file(relativePath: { eq: "background-product-desktop.webp" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        mobileBackground: file(relativePath: { eq: "background-product-desktop.webp" }) {
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
        <Wrapper>
          <div>
            <Typography variant="h1" compnent="h1" 
              style={{textAlign: 'center', lineHeight: '1.1'}}
            >
              Gerencie toda&nbsp;a
              <br/>
              propriedade com Aegro.
            </Typography>
          </div>
          <ButtonsWrapper>
            <StyledButton variant="contained" color="primary" 
              style={{width: '229px'}}
              to="/contato"
            >
              Saiba mais
            </StyledButton>
            <StyledButton 
              variant="outlined" 
              component="a"
              href="http://app.aegro.com.br/register"
              target="_blank"
              style={{width: '229px'}}
            >
              Teste grátis
            </StyledButton>
          </ButtonsWrapper>
        </Wrapper>
      </Container>
    </BackgroundImage>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 474px;
  justify-content: center;
`

const ButtonsWrapper = styled.div`
  margin-top: 45px;
  max-width: 236px;
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  height: 90px;

  @media(min-width: 600px) {
    max-width: 606px;
    width: 100%;
    flex-direction: row;
    height: auto;
  }
`

export default FifthSection
