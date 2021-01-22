import React, { useState } from 'react'
import styled from 'styled-components'
import { Box, Container, Typography, useMediaQuery } from '@material-ui/core'
import Slider from 'react-slick'
import FeatureSlide from './FeatureSlide'
import StyledButton from '../StyledButton'
import FeatureAccordion from './FeatureAccordion'
import FeatureVideo from './FeatureVideo'

import planejamentoVideo from '../../assets/videos/planejamento-safra.mp4'
import gestaoFinanceiraVideo from '../../assets/videos/gestao-financeira.mp4'
import estoqueVideo from '../../assets/videos/estoque.mp4'
import cadernoVideo from '../../assets/videos/caderno-de-campo.mp4'
import patrimonioVideo from '../../assets/videos/patrimonio.mp4'
import comercializacaoVideo from '../../assets/videos/comercializacao.mp4'
import indicadoresAgricolasVideo from '../../assets/videos/indicadores-agricolas.mp4'

import planejamentoGif from '../../images/planejamento-safra.gif'
import gestaoFinanceiraGif from '../../images/gestao-financeira.gif'
import estoqueGif from '../../images/estoque.gif'
import cadernoGif from '../../images/caderno-de-campo.gif'
import patrimonioGif from '../../images/patrimonio.gif'
import comercializacaoGif from '../../images/comercializacao.gif'
import indicadoresAgricolasGif from '../../images/indicadores-agricolas.gif'
import { Link } from 'gatsby'

const SecondSection = () => {

  const [VideoShown, setVideoShown] = useState(planejamentoVideo)
  const [accordionExpanded, setAccordionExpanded] = useState('planejamento')

  const inDesktop = useMediaQuery('(min-width:960px)')

  const handleChangeAccordion = (panel, video) => {
    setVideoShown(video)
    setAccordionExpanded(panel)
  }

  return (
    <StyledSecondSection id="recursos">
      <Container maxWidth="lg">
        <SectionWrapper>
          <Typography variant="h2" component="h2">
            Seu software de gestão&nbsp;agrícola
          </Typography>
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} width="100%" >
            {inDesktop ? (
              <>
                <Box width="50%">
                  <div style={{ marginLeft: '1rem', marginRight: '1rem' }}>
                    <FeatureAccordion
                      title="Planejamento de safra"
                      description="Uma safra lucrativa começa pelo planejamento. No Aegro, você pode orçar os custos do plantio e estabelecer metas de produtividade para a sua lavoura. Essas previsões te ajudam a analisar a viabilidade econômica do cultivo antes mesmo que a 1ª semente seja plantada."
                      expanded={accordionExpanded === 'planejamento'}
                      onChange={() => handleChangeAccordion('planejamento', planejamentoVideo)}
                    />
                    <FeatureAccordion
                      title="Gestão financeira rural"
                      description="Conforme os gastos da fazenda se concretizam, você organiza seu fluxo de caixa no Aegro. Vincule diferentes contas bancárias ao software agro para ficar em dia com as parcelas. O balanço entre entradas e saídas de dinheiro indica a saúde financeira do negócio."
                      expanded={accordionExpanded === 'gestaoFinanceira'}
                      onChange={() => handleChangeAccordion('gestaoFinanceira', gestaoFinanceiraVideo)}
                    />
                    <FeatureAccordion
                      title="Controle de estoque rural"
                      description="Cada nota de compra cadastrada no Aegro adiciona automaticamente um insumo no seu estoque. O sistema de gestão agrícola oferece uma relação completa de itens estocados para que você faça a aplicação consciente dos produtos e evite desperdícios."
                      expanded={accordionExpanded === 'estoque'}
                      onChange={() => handleChangeAccordion('estoque', estoqueVideo)}
                    />
                    <FeatureAccordion
                      title="Caderno de campo"
                      description="Monte um cronograma de atividades para a safra e controle o progresso do trabalho pelo Aegro. As operações agrícolas podem ser registradas em tempo real, pelo celular. Assim, você ganha mais agilidade no campo e mantém um histórico detalhado de manejo."
                      expanded={accordionExpanded === 'caderno'}
                      onChange={() => handleChangeAccordion('caderno', cadernoVideo)}
                    />
                    <FeatureAccordion
                      title="Máquinas agrícolas"
                      description="Gerencie o uso do maquinário no campo, monitorando seu histórico de atividades. Controle também abastecimentos e manutenções, definindo alertas periódicos de revisão. Desta forma, é possível avaliar e otimizar o desempenho operacional dos seus equipamentos."
                      expanded={accordionExpanded === 'patrimonio'}
                      onChange={() => handleChangeAccordion('patrimonio', patrimonioVideo)}
                    />
                    <FeatureAccordion
                      title="Comercialização agrícola"
                      description="No final da safra, você registra a sua colheita e controla as cargas que saem da fazenda para garantir que elas cheguem ao destino de forma correta. Defina o preço de venda e gere a NF‑e da mercadoria diretamente pelo nosso software agrícola."
                      expanded={accordionExpanded === 'comercializacao'}
                      onChange={() => handleChangeAccordion('comercializacao', comercializacaoVideo)}
                    />
                    <FeatureAccordion
                      title="Indicadores agrícolas"
                      description="O Aegro cruza todos os dados que você insere ao longo do ciclo produtivo para te entregar os principais indicadores da fazenda, como custos de safra e a rentabilidade dos talhões. Tenha relatórios completos à sua disposição para tomar decisões mais assertivas."
                      expanded={accordionExpanded === 'indicadoresAgricolas'}
                      onChange={() => handleChangeAccordion('indicadoresAgricolas', indicadoresAgricolasVideo)}
                    />
                  </div>
                </Box>
                <Box width="50%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <FeatureVideo videoSrc={VideoShown} />
                  <InternalStyledButton 
                    variant="contained"
                    color="primary"
                    component={Link}  
                    to="/contato"
                  >
                    Peça uma demonstração aegro
                  </InternalStyledButton>
                </Box>
              </>
            ) : (
                <div style={{ margin: '15px', paddingTop: '30px' }}>
                  <StyledSlider>
                    <FeatureSlide
                      title="Planejamento de safra"
                      description="Uma safra lucrativa começa pelo planejamento. No Aegro, você pode orçar os custos do plantio e estabelecer metas de produtividade para a sua lavoura. Essas previsões te ajudam a analisar a viabilidade econômica do cultivo antes mesmo que a 1ª semente seja plantada."
                      gifUrl={planejamentoGif}
                    />
                    <FeatureSlide
                      title="Gestão financeira rural"
                      description="Conforme os gastos da fazenda se concretizam, você organiza seu fluxo de caixa no Aegro. Vincule diferentes contas bancárias ao software agro para ficar em dia com as parcelas. O balanço entre entradas e saídas de dinheiro indica a saúde financeira do negócio."
                      gifUrl={gestaoFinanceiraGif}
                    />
                    <FeatureSlide
                      title="Controle de estoque rural"
                      description="Cada nota de compra cadastrada no Aegro adiciona automaticamente um insumo no seu estoque. O sistema de gestão agrícola oferece uma relação completa de itens estocados para que você faça a aplicação consciente dos produtos e evite desperdícios."
                      gifUrl={estoqueGif}
                    />
                    <FeatureSlide
                      title="Caderno de campo"
                      description="Monte um cronograma de atividades para a safra e controle o progresso do trabalho pelo Aegro. As operações agrícolas podem ser registradas em tempo real, pelo celular. Assim, você ganha mais agilidade no campo e mantém um histórico detalhado de manejo."
                      gifUrl={cadernoGif}
                    />
                    <FeatureSlide
                      title="Máquinas agrícolas"
                      description="Gerencie o uso do maquinário no campo, monitorando seu histórico de atividades. Controle também abastecimentos e manutenções, definindo alertas periódicos de revisão. Desta forma, é possível avaliar e otimizar o desempenho operacional dos seus equipamentos."
                      gifUrl={patrimonioGif}
                    />
                    <FeatureSlide
                      title="Comercialização agrícola"
                      description="No final da safra, você registra a sua colheita e controla as cargas que saem da fazenda para garantir que elas cheguem ao destino de forma correta. Defina o preço de venda e gere a NF‑e da mercadoria diretamente pelo nosso software agrícola."
                      gifUrl={comercializacaoGif}
                    />
                    <FeatureSlide
                      title="Indicadores agrícolas"
                      description="O Aegro cruza todos os dados que você insere ao longo do ciclo produtivo para te entregar os principais indicadores da fazenda, como custos de safra e a rentabilidade dos talhões. Tenha relatórios completos à sua disposição para tomar decisões mais assertivas."
                      gifUrl={indicadoresAgricolasGif}
                    />
                  </StyledSlider>
                  <InternalStyledButton 
                    variant="contained" 
                    color="primary" 
                    component={Link}
                    to="/contato"
                  >
                    Peça uma demonstração aegro
                  </InternalStyledButton>
                </div>
              )}
          </Box>
        </SectionWrapper>
      </Container>
    </StyledSecondSection>
  )
}

const StyledSecondSection = styled.section`
  color: #333333;
  font-style: normal;
  background-color: white;

  h2 {
    font-size: 50px;
    margin-top: 3%;
    font-weight: bold;
    line-height: 50px;
    margin-bottom: 3%;
  }
  h3 {
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
  }

  button {
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
  }

  p {
    color: #777777;
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width:959.95px) {
    button {
      font-weight: 700;
      letter-spacing: 2.1px;
    }

    h3 {
      font-weight: 700;
      letter-spacing: 2.1px;
    }

    h2 {
      font-size: 26px;
      font-weight: 700;
      line-height: 1;
    }
  }
`

const SectionWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 73px);
  display: flex;
  min-height: 720px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const StyledSlider = styled(Slider)`
  button {
    display: none !important;
  }
  .slick-dots {
    padding: 0;
    margin-top: 0;
  }
  h3 {
    margin: .5rem 0 1rem;
  }
  .slick-dots li.slick-active button {
    border-color: #00C65E;
    background-color: #00C65E;
  }
  .slick-dots > li > button {
    color: transparent;
    width: 12px;
    border: 1px solid #777777;
    height: 12px;
    opacity: 1;
    border-radius: 15px;
  }
`

const InternalStyledButton = styled(StyledButton)`
  width: 70%;
  margin-top: 50px;
  border-radius: 0px 18px 18px 18px;

  @media (max-width: 959.95px) {
    width: 100%;
    padding: 10px 0;
    font-size: 12px;
    letter-spacing: 1.5px;
  }
`

export default SecondSection
