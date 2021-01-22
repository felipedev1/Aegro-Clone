import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
import { Button, Container, Typography } from '@material-ui/core'

import arrowTopRight from '../../images/arrow-top-right.svg'

const FifthSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "backgroundPortal.webp" }) {
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
      <Container maxWidth="lg">
        <ContentWrapper>
          <Title variant="h1" compontent="h1">
            Programa de Parcerias
          </Title>
          <Description variant="body1" component="p">
            Seja um consultor Aegro e atenda sua carteira de clientes com o software de gestão agrícola mais utilizado do Brasil.
          </Description>
          <div>
            <Button
              variant="text" 
              color="secondary"
              component="a"
              href="https://conhecimento.aegro.com.br/contato-consultores" 
              target="_blank"
              style={{
                paddingLeft: '0px',
                color: 'white',
                fontSize: '16px',
                letterSpacing: '1px',
              }}
            >
              Seja uma consultoria aegro
              <span style={{marginLeft: '7px'}}>
                <img src={arrowTopRight} alt="" />
              </span>
            </Button>
          </div>
        </ContentWrapper>
      </Container>
    </StyledBackgroundSection>
  )
}

const StyledBackgroundSection = styled(BackgroundImage)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  opacity: 0.99;
  display: flex;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
`

const ContentWrapper = styled.div`
  height: 100vh;
  display: flex;
  max-height: 1080px;
  min-height: 600px;
  padding-left: 40px;
  padding-right: 40px;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 959.95px) {
    padding-left: 12px;
    padding-right: 0;
  }
` 

const Title = styled(Typography)`
  max-width: 350px;

  @media (max-width: 959.95px) {
    font-size: 26px;
    max-width: 200px;
  }
`

const Description = styled(Typography)`
  max-width: 375px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (min-width: 600px) {
    font-size: 16px;
  }
`

export default FifthSection