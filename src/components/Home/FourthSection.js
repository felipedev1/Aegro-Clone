import React from 'react'
import { Container, Typography } from '@material-ui/core'
import styled from 'styled-components'
import { TypographyH1 } from '../SharedStyledComponents'
import Slider from 'react-slick'
import Feedback from './Feedback'
import VitorFernandoImg from '../../images/VitorFernando.png'
import RaulCostaImg from '../../images/RaulCosta.png'
import JoseCusinatoImg from '../../images/JoseCusinato.png'


const FourthSection = () => {
  return (
    <StyledFourthSection>
      <Container maxWidth="lg">
        <ContentWrapper>
          <div style={{width: '100%'}}>
            <MainSectionContent>
              <div style={{flex: '1 1 0%'}}>
                <Title variant="h1" component="h1">
                  Estamos presentes <br/> no Brasil inteiro
                </Title>
                <Description variant="body1" compontent="p">
                  E ajudamos a gerenciar muitas fazendas. Nos esforçamos todos os dias para entregar sempre as melhores soluções para os nossos clientes e ajudar o agronegócio a evoluir.
                </Description>
              </div>
              <Statistics>
                <StatisticTypography variant="body1" component="p">
                  <span>+2 milhões</span>
                  <br/>
                  de hectares
                </StatisticTypography>
                <StatisticTypography variant="body1" component="p">
                  <span>+4700</span>
                  <br/>
                  fazendas
                </StatisticTypography>
                <StatisticTypography variant="body1" component="p">
                  <span>+5000</span>
                  <br/>
                  usuários por mês
                </StatisticTypography>
              </Statistics>
            </MainSectionContent>
          </div>
          <div style={{width: '100%'}}>
            <FeedbacksSlider dots={true} >
              <div>
                <Feedback 
                  title="Rápido!"
                  description="“Antes fazia o projeto técnico de custeio de safra por planilha e demorava muito tempo. Hoje, no Aegro, faço o projeto técnico rapidamente e sem maiores problema.”"
                  stickerProfile={VitorFernandoImg}
                  name="VITOR FERNANDO VON MÜHLEN"
                  uf="MG"
                />
              </div>
              <div>
                <Feedback 
                  title="Prático!"
                  description="“Hoje conseguimos ver exatamente onde estamos pecando, onde pode melhorar e onde podemos reduzir custos. É um sistema que realmente funciona. Não é um programa criado por um técnico, é um sistema realmente pensado e prático.”"
                  stickerProfile={RaulCostaImg}
                  name="RAUL COSTA NETO"
                  uf="MT"
                />
              </div>
              <div>
                <Feedback 
                  title="Exelente!"
                  description="“O Aegro hoje entra na minha visão de gestão agrícola como uma ferramenta de confiança e bem completa. Você faz o lançamento das suas despesas, programa as atividades na fazenda e consegue ter o custo real da operação na palma da sua mão. É excelente para trabalhar.”"
                  stickerProfile={JoseCusinatoImg}
                  name="JOSÉ CUSINATO JUNIOR"
                  uf="MG"
                />
              </div>
            </FeedbacksSlider>
          </div>
        </ContentWrapper>
      </Container>
    </StyledFourthSection>
  )
}

const StyledFourthSection = styled.section`
  display: flex;
  min-height: 600px;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: white;

  @media (min-width: 960px) {
    height: 100vh;
    max-height: 1080px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  padding-left: 40px;
  padding-right: 40px;
`

const MainSectionContent = styled.div`
  display: flex;
  min-height: 240px;
  flex-direction: column;

  @media (min-width: 960px) {
    min-height: 430px;
  }
`

const Title = styled(TypographyH1)`
  color: #333333;
  margin-bottom: 20px;

  @media (min-width: 960px) {
    max-width: 450px;
  }
`

const Description = styled(Typography)`
  color: #777777;
  line-height: 1.5;
  margin-bottom: 25px;

  @media (min-width: 960px) {
    max-width: 420px;
  }
`

const Statistics = styled.div`
  display: flex;
  margin-bottom: 60px;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 600px) {
    margin-bottom: 20px;
    flex-direction: row;
  }
`

const StatisticTypography = styled(Typography)`
  font-size: 20px;
  margin-top: 34px;
  text-align: center;
  color: #00C65E;

  span {
    font-size: 30px;
    font-weight: 700;
  }
`

const FeedbacksSlider = styled(Slider)`

.slick-list {
  height: 100%;
  border-radius: 20px;
  background-color: #F2F2F2;
}
.slick-dots {
  padding: 0;
  margin-top: 20px;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
}
.slick-dots li.slick-active button {
  border: 0;
  background-color: #00C65E;
}
.slick-dots > li > button {
  color: transparent;
  width: 14px;
  border: 1px solid #777777;
  height: 14px;
  opacity: 1;
  border-radius: 15px;

  &::before {
    color: transparent;
  }
}

@media (min-width:960px) {
  width: 448px;
  margin-left: calc(100% - 448px);
}

`

export default FourthSection
