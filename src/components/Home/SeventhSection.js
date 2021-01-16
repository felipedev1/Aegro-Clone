import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { TypographyH1 } from '../sharedStyledComponents'
import StyledButton from '../StyledButton'
import arrowTopRight from '../../images/arrow-top-right-green.svg'


const SeventhSection = () => {
  const data = useStaticQuery(graphql`
  query {
    mobileImage: file(relativePath: { eq: "portalCard-mobile.png" }) {
      publicURL
    }
    desktopImage: file(relativePath: { eq: "portalCard-desktop.png" }) {
      publicURL
    }
  }
`
  )
  const desktopImage = data.desktopImage.publicURL
  const mobileImage = data.mobileImage.publicURL

  return (
    <StyledSeventhSection desktopImage={desktopImage} mobileImage={mobileImage} >
      <Container maxWidth="lg">
        <ContentWrapper>
          <Grid container>
            <Grid item sm={6}>
              <div>
                <Title variant="h1" component="h1">
                  Portal dos
                  <br />
                  Consultores
                </Title>
                <Description variant="body1" component="p">
                  Criamos o Portal de Consultores Aegro para conectar consultorias especializadas à propriedades rurais. Através do Portal, você pesquisa os tipos de serviço que tem interesse e pode encontrar os parceiros da sua região.
                </Description>
                <StyledButton variant="text" color="primary">
                  Acesse o Portal
                  <span style={{ marginLeft: '7px' }}>
                    <img src={arrowTopRight} alt="" />
                  </span>
                </StyledButton>
              </div>
            </Grid>
            <Grid item xs={6}>

            </Grid>
          </Grid>
        </ContentWrapper>
      </Container>
    </StyledSeventhSection>
  )
}

const StyledSeventhSection = styled.section`
  height: 100vh;
  display: flex;
  max-height: 700px;
  min-height: 600px;
  align-items: flex-start;
  background-size: contain;
  background-color: #F2F2F2;
  background-image: url(${props => props.mobileImage});
  background-repeat: no-repeat;
  background-position: bottom right;

  @media (min-width: 600px) {
    max-height: 1080px;
    align-items: center;
    background-image: url(${props => props.desktopImage});
  }
`

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  padding-left: 40px;
  padding-right: 40px;

  @media (max-width: 959.95px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`

const Title = styled(TypographyH1)`
  color: #333333;
  margin-bottom: 40px;

  @media (max-width: 959.95px) {
    font-size: 26px;
    margin-top: 76px;
  }
`

const Description = styled(Typography)`
  color: #777777;
  max-width: 409px;
  margin-bottom: 40px;
  line-height: 1.4;
`

export default SeventhSection
