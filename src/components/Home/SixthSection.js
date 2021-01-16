import React from 'react'
import { Container, Grid } from '@material-ui/core'
import styled from 'styled-components'
import arrowTopRight from '../../images/arrow-top-right-green.svg'
import lavoura from '../../images/lavoura10.png'
import { TypographyH1 } from '../sharedStyledComponents'
import StyledButton from '../StyledButton'

const SixthSection = () => {
  return (
    <StyledSixthSection>
      <Container maxWidth="lg">
        <ContentWrapper>
          <Grid container>
            <Grid item sm={6} style={{display: 'flex', alignItems: 'center'}} >
              <div>
                <Title variant="h1" component="h1">
                  Conheça&nbsp;nosso canal&nbsp;de&nbsp;conteúdo Lavoura10
                </Title>
                <StyledButton to="https://blog.aegro.com.br/" variant="text" color="primary">
                  Acesse o blog
                  <span style={{marginLeft: '7px'}}>
                    <img src={arrowTopRight} alt />
                  </span>
                </StyledButton>
              </div>
            </Grid>
            <Grid item sm={6} >
              <BlogImg src={lavoura} />
            </Grid>
          </Grid>
        </ContentWrapper>
      </Container>
    </StyledSixthSection>
  )
}

const StyledSixthSection = styled.section`
  height: 100vh;
  display: flex;
  max-height: 1080px;
  min-height: 600px;
  align-items: center;
  background-color: #005F61;

  @media (max-width: 959.95px) {
    max-height: 640px;
  }
`

const ContentWrapper = styled.div`
  padding-left: 40px;
  padding-right: 40px;

  @media (max-width: 959.95px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`

const Title = styled(TypographyH1)`
  color: #FFECCB;
  max-width: 420px;
  margin-bottom: 30px;

  @media (min-width: 600px) {
    margin-bottom: 40px;
  }
`

const BlogImg = styled.img`
  width: 100%;
  max-width: 636px;

  @media (max-width: 959.95px) {
    margin-top: 20px;
  }
`

export default SixthSection
