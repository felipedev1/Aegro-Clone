import React from 'react'
import styled from 'styled-components'
import { Container, Typography } from '@material-ui/core'

const ThirdSection = () => {
  return (
    <section>
      <Container maxWidth="lg">
        <ContentWrapper>
          <Title variant="h1" component="h1">
            Estamos presentes
            <br/>
            no&nbsp;Brasil inteiro
          </Title>
          <Statistics>
            <Typography variant="body1" component="p" >
              <span>+4700</span>
              <br/>
              fazendas
            </Typography>
            <Typography variant="body1" component="p" >
              <span>+2M</span>
              <br/>
              de hectares
            </Typography>
            <Typography variant="body1" component="p" >
              <span>+5000</span>
              <br/>
              usuários por mês
            </Typography>
          </Statistics>
        </ContentWrapper>
      </Container>
    </section>
  )
}

const ContentWrapper = styled.div`
  height: 100vh;
  display: flex;
  max-height: 576px;
  flex-direction: column;
  justify-content: center;
`

const Title = styled(Typography)`
  text-align: center;
  margin-bottom: 53px;
`

const Statistics = styled.div`
  @media (min-width:960px) {
    display: flex;
    justify-content: center;
  }

  p {
    font-size: 26px;
    text-align: center;
    font-weight: 400;
    line-height: 0.9;
    margin-bottom: 37px;
    
    @media (min-width:960px) {
      margin: 15px;
      font-size: 30px;
    }

    & > span {
      font-size: 40px;
      font-weight: 700;

      @media (min-width:960px) {
        font-size: 90px;
      }

      @media (min-width:1440px) {
        font-size: 100px;
      }
    }
  }
`

export default ThirdSection
