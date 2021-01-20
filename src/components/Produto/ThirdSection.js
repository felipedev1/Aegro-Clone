import React from 'react'
import styled from 'styled-components'
import { Container, Grid, Typography, useMediaQuery } from '@material-ui/core'
import StyledButton from '../StyledButton'

import ilustra1 from '../../images/ilustra1.png'
import ilustra2 from '../../images/ilustra2.png'
import ilustra3 from '../../images/ilustra3.png'
import ilustra4 from '../../images/ilustra4.png'
import ilustra5 from '../../images/ilustra5.png'

const ThirdSection = () => {
  const inDesktop = useMediaQuery('(min-width:960px)')

  return (
    <section>
      <Container maxWidth="lg">
        <ContentWrapper>
          <Typography variant="h1" component="h1">
            Por que escolher
            <br />
            o Aegro?
          </Typography>
          <ItemWrapper>
            <Grid container alignItems="center">
              <Grid item sm={6}>
                <ItemTitle variant="h2" component="h2">
                  Acesso simultâneo
                </ItemTitle>
                <ItemDescription component="p">
                  Todos os funcionários da sua propriedade podem acessar o software de gestão agrícola simultaneamente, trabalhando de maneira mais integrada.
                </ItemDescription>
              </Grid>
              <Grid container item justify={{ xs: 'center' }} sm={6}>
                <ItemImgContainer>
                  <img src={ilustra1} alt="ilustra1" />
                </ItemImgContainer>
              </Grid>
            </Grid>
          </ItemWrapper>
          <ItemWrapper>
            <Grid container alignItems="center" direction="row-reverse">
              <Grid item sm={6}>
                <ItemTitle variant="h2" component="h2">
                  Mais mobilidade
                </ItemTitle>
                <ItemDescription component="p">
                  Além de administrar as operações da fazenda pelo computador, aproveite o nosso aplicativo para celular e tablet que funciona mesmo sem internet.
                </ItemDescription>
                {inDesktop && (
                  <StyledButton
                    to="/contact"
                    variant="outlined"
                    style={{ marginTop: '25px'}}
                  >
                    Fale conosco
                  </StyledButton>
                )}
              </Grid>
              <Grid container item justify="center" sm={6}>
                <ItemImgContainer>
                  <img src={ilustra2} alt="ilustra2" />
                </ItemImgContainer>
              </Grid>
              {!inDesktop && (
                <StyledButton
                  to="/contact"
                  variant="outlined"
                  style={{ marginTop: '25px', width: '100%' }}
                >
                  Fale conosco
                </StyledButton>
              )}
            </Grid>
          </ItemWrapper>
          <ItemWrapper>
            <Grid container alignItems="center">
              <Grid item sm={6}>
                <ItemTitle variant="h2" component="h2">
                  Apoio ao uso
                </ItemTitle>
                <ItemDescription component="p">
                  Receba um treinamento completo a partir da contratação e conte com uma rede de conhecimento para lhe apoiar sempre que precisar.
                </ItemDescription>
              </Grid>
              <Grid container item justify="center" sm={6}>
                <ItemImgContainer>
                  <img src={ilustra3} alt="ilustra3" />
                </ItemImgContainer>
              </Grid>
            </Grid>
          </ItemWrapper>
          <ItemWrapper>
            <Grid container alignItems="center" direction="row-reverse">
              <Grid item sm={6}>
                <ItemTitle variant="h2" component="h2">
                  Segurança de dados
                </ItemTitle>
                <ItemDescription component="p">
                  Somos uma empresa independente e não repassamos os seus dados para terceiros, além de assegurar que você não perderá informações sobre a sua fazenda.
                </ItemDescription>
              </Grid>
              <Grid container item justify="center" sm={6}>
                <ItemImgContainer>
                  <img src={ilustra4} alt="ilustra4" />
                </ItemImgContainer>
              </Grid>
            </Grid>
          </ItemWrapper>
          <ItemWrapper style={{paddingBottom: "0"}}>
            <Grid container alignItems="center">
              <Grid item sm={6}>
                <ItemTitle variant="h2" component="h2">
                  Sem taxas
                </ItemTitle>
                <ItemDescription component="p">
                  Pague apenas sua assinatura, sem custos extras de implantação, de treinamento ou por número de usuários cadastrados.
                </ItemDescription>
              </Grid>
              <Grid container item justify={{ xs: 'center' }} sm={6}>
                <ItemImgContainer>
                  <img src={ilustra5} alt="ilustra5" />
                </ItemImgContainer>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <ButtonToPlans to="/planos" variant="contained" color="secondary">
                Conheça nossos planos
              </ButtonToPlans >
            </Grid>
          </ItemWrapper>
        </ContentWrapper>
      </Container>
    </section>
  )
}

const ContentWrapper = styled.div`
  padding: 79px 0;
  margin-left: 1rem;
  margin-right: 1rem;

  @media (min-width: 600px) {
    padding: 100px 0;

    h1 {
      font-size: 50px;
      line-height: 50px;
    }
  }

`

const ItemWrapper = styled.div`
  padding: 40px 0;
  
  @media (min-width: 600px) {
    padding: 70px 0 66px;

    &:not(:last-child) {
    border-bottom: 1px solid white;
    }
  }
`
const ItemTitle = styled(Typography)`
  font-size: 30px;
  font-style: normal;
  font-weight: bold;
  line-height: 30px;
  margin-bottom: 14px;
  letter-spacing: 0.1px;

  @media (max-width: 959.95px) {
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
  }
`

const ItemDescription = styled(Typography)`
  font-size: 18px;
  max-width: 80%;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;

  @media (max-width: 959.95px) {
    font-size: 14px;
    max-width: 100%;
  }
`

const ItemImgContainer = styled.div`
  width: 93%;

  @media (max-width: 959.95px) {
    width: 100%;
    margin-top: 27px;
  }

  img {
    width: 100%;
  }
`

const ButtonToPlans = styled(StyledButton)`
  margin-top: 100px;

  @media (max-width: 959.95px) {
    margin-top: 45px;
    width: 100%;
  }
`

export default ThirdSection
