import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Container, Typography } from '@material-ui/core'
import BackgroundImage from 'gatsby-background-image'

import StyledButton from '../StyledButton'
import { TypographyH1 } from '../SharedStyledComponents'
import arrowRight from '../../images/arrow-right.svg'

const SecondSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "image-harvest.jpg" }) {
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
    <StyledSecondSection>
      <Division>
        <div style={{ flex: '1 1 0%' }}></div>
        <div style={{ maxWidth: '640px', width: '100%', display: 'flex', alignItems: 'center' }}>
          <Container maxWidth="lg">
            <ContentWrapper>
              <Title variant="h1" component="h1">
                Unimos a rotina
              <br />
              da lavoura à
              <br />
              gestão financeira,
              </Title>
              <Description variant="body1" component="p">
                centralizando todas as informações em um software de gestão agrícola que dá ao produtor rural mais controle sobre os investimentos e os processos produtivos da fazenda.
              </Description>
              <ButtonToProduct to="/produto"
                disableElevation 
                variant="text" 
                color="primary"
                 >
                Conheça o produto
                <span style={{marginLeft: '3px'}}>
                  <img src={arrowRight} alt />
                </span>
              </ButtonToProduct>
            </ContentWrapper>
          </Container>
        </div>
      </Division>
      <Division>
        <StyledBackground
          Tag="div"
          fluid={imageData}
          backgroundColor={`#00C65E`}
        />
      </Division>
    </StyledSecondSection>
  )
}


const StyledSecondSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;

  @media (min-width: 600px)
  {
    height: 100vh;
    max-height: 1080px;
    min-height: 600px;
    flex-direction: row;
  }
`

const Division = styled.div`
  width: 100vw;
  display: flex;

  @media (min-width: 600px) {
    width: 50vw;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 12px;
  margin-right: 12px;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 600px) {
    margin-left: 38px;
  }
`

const Title = styled(TypographyH1)`
  color: #333333;
  margin-top: 20px;
  margin-bottom: 40px;
`

const Description = styled(Typography)`
  color: #777777;
  line-height: 1.5;
  margin-bottom: 21px;

  @media (min-width: 600px) {
    max-width: 410px;
  }
`

const ButtonToProduct = styled(StyledButton)`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 2.5px;
  margin-left: -6px;
`

const StyledBackground = styled(BackgroundImage)`
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  min-height: 640px;
`

export default SecondSection