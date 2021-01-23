import React from 'react'
import styled from 'styled-components'
import { Container, Typography, useMediaQuery } from '@material-ui/core'
import { FiArrowDown } from 'react-icons/fi'
import { ContentWrapper } from './styles'
import AnchorScrollButton from '../AnchorScrollButton'

import monitoramento from '../../images/monitoramento.svg'
import satelite from '../../images/satelite.svg'
import caixa from '../../images/caixa.svg'
import previsoes from '../../images/previsoes-climaticas.svg'

const planos1 = [
  "Mapeamento dos talhões",
  "Planejamento de safra",
  "Controle de atividades",
  "Gestão de patrimônio",
  "Custos da safra e do talhão",
  "Resultados da safra e do talhão",
  "Registros pluviométricos",
  "Observações georreferenciadas",
]

const planos2 = planos1.concat([
  "Fluxo de caixa e extrato",
  "Controle de múltiplas contas bancárias",
  "Contas a pagar e a receber",
  "Apropriação de custos",
  "Controle de estoque",
  "Gestão da produção e armazenamento",
  "Controle de vendas",
  "Emissão de Nota Fiscal Eletrônica de venda e remessa de produção",
])

const FirstSection = () => {
  const inMobile = useMediaQuery('(max-width:600px)')

  return (
    <StyledFirstSection>
      <AppBarSpace />
      <Container maxWidth="lg">
        <SectionHeaderWrapper>
          <HeaderTitle variant="h1" component="h1">
            Gestão rural na sua medida
          </HeaderTitle>
          <Typography variant="body1" component="p" style={{ color: '#777', maxWidth: '520px' }}>
            O software Aegro se adapta perfeitamente à rotina das fazendas. Encontre um plano de assinatura ideal para evoluir a sua gestão:
          </Typography>
        </SectionHeaderWrapper>
      </Container>
      <Container maxWidth="lg">
        {inMobile && (
          <ContentWrapper>
            <AnchorScrollButton component="a"
              variant="outlined"
              color="primary"
              scrollTo="#planos"
            >
              <FiArrowDown size={60} />
            </AnchorScrollButton>
          </ContentWrapper>
        )}
      </Container>
      <Container maxWidth="lg" id="planos">
        <PlanosContainer>
          <Plano1>
            <Typography variant="h2" component="h2">
              Plano produtividade
            </Typography>
            <Typography variant="body1" component="p" className="subtitle">
              Aumente a eficiência da sua lavoura
            </Typography>
            <Typography variant="h3" component="h3">
              O que está incluso:
            </Typography>
            <ul>
              {planos1.map((plano, index) => (
                <li key={index}>
                  {plano}
                </li>
              ))}
            </ul>
          </Plano1>
          <Plano2>
            <Typography variant="h2" component="h2">
              Plano lucratividade
            </Typography>
            <Typography variant="body1" component="p" className="subtitle">
              Cresça os resultados da sua fazenda
            </Typography>
            <Typography variant="h3" component="h3">
              O que está incluso:
            </Typography>
            <ul>
              {planos2.map((plano, index) => (
                <li key={index}>
                  {plano}
                </li>
              ))}
            </ul>
          </Plano2>
          <Plano3>
            <Typography variant="h2" component="h2">
              Soluções extras
            </Typography>
            <Typography variant="body1" component="p" className="subtitle">
              Integre recursos poderosos ao seu Aegro
            </Typography>
            <Typography variant="h3" component="h3">
              O que você pode adicionar:
            </Typography>
            <ul>
              <CustomListItem>
                <img src={satelite} alt=""/>
                <span>
                  Imagens de satélite e NDVI
                </span>
              </CustomListItem>
              <CustomListItem>
                <img src={monitoramento} alt=""/>
                <span>
                  Monitoramento de pragas e doenças
                </span>
              </CustomListItem>
              <CustomListItem>
                <img src={previsoes} alt=""/>
                <span>
                  Previsões climáticas
                </span>
              </CustomListItem>
              <CustomListItem>
                <img src={caixa} alt=""/>
                <span>
                  Livro Caixa Digital do Produtor Rural
                </span>
              </CustomListItem>
            </ul>
          </Plano3>
        </PlanosContainer>
      </Container>
    </StyledFirstSection>
  )
}

const StyledFirstSection = styled.section`
  background-color: white;

  @media(min-width: 600px){
    padding-bottom: 64px;
  }
`

const AppBarSpace = styled.div`
  height: 80px;
  
  @media (min-width: 600px) {
    height: 110px;
  }
`

const SectionHeaderWrapper = styled(ContentWrapper)`
  min-height: 210px;

  @media (min-width: 600px) {
    min-height: 290px;
  }
`

const HeaderTitle = styled(Typography)`
  color: #333;
  max-width: 180px;

  @media (min-width: 600px) {
    max-width: 350px;
  }
`

const PlanosContainer = styled(ContentWrapper)`
  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Plano = styled.div`
  color: #333333;
  padding: 20px;
  margin-top: 15px;
  margin-bottom: 15px;

  @media (min-width:960px) {
    flex: 1;
    padding: 30px 35px;
    max-width: 26%;
  }
  h2 {
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 13px;
    letter-spacing: 0;
  }
  .subtitle {
    font-size: 14px;
    line-height: 1.43;
    margin-bottom: 8px;
  }
  h3 {
    font-size: 12px;
    font-weight: 700;
    line-height: 2.33;
    margin-bottom: 5px;
  }
  ul {
    margin: 0;
    padding-inline-start: 20px;
  }
  ul li {
    font-size: 11px;
    margin-bottom: 13px;
    list-style-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNSAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNDE0NTUgNy42ODY0OUw0LjM3NTQ5IDEwLjY0ODVMMTMuMjYyMiAxLjc2MjQ4IiBzdHJva2U9IiMwMEM2NUUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=);
  }

  @media (min-width:600px) {
    h2 {
      font-size: 30px;
      margin-bottom: 4px;
    }

    .subtitle {
      font-size: 18px;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 16px;
    }

    ul li {
      font-size: 16px;
      margin-top: 16px;
      margin-bottom: 21.7px;
    }

    ul li span {
      left: 10px;
      position: relative;
    }
  }
`

const Plano1 = styled(Plano)`
  border: 2px solid;
  border-color: #ccc;
`

const Plano2 = styled(Plano)`
  border: 2px solid;
  border-color: #00C65E;
`

const Plano3 = styled(Plano)`
  background-color: #F5F5F5;
`

const CustomListItem = styled.li`
  list-style:none;
  display:flex;
  align-items:center;
  margin-left:-20px;

  img {
    width: 13px;
    margin-right: 8px;

    @media (min-width: 600px) {
      width: 20px;
    }
  }
`

export default FirstSection
