import React from 'react'
import styled from 'styled-components'
import { Box, Container, Grid, Typography, useMediaQuery } from '@material-ui/core'
import { HiOutlineArrowDown } from 'react-icons/hi'
import Integration from './Integration'

import monitoramento from '../../images/monitoramento.svg'
import satelite from '../../images/satelite.svg'
import caixa from '../../images/caixa.svg'
import previsoes from '../../images/previsoes-climaticas.svg'

const FourthSection = () => {
  const inDesktop = useMediaQuery('(min-width:960px)')

  return (
    <StyledFourthSection id="integracoes">
      <Container maxWidth="lg">
        <div style={{padding: '15px'}}>
          <Box display="flex" 
            alignItems={{xs: 'flex-start', sm: 'center'}}
            justifyContent="center" 
            flexDirection="column"
          >
            <SectionTitle variant="h1" component="h1">
              Mais soluções para
              <br/>
               a sua fazenda
            </SectionTitle>
            <Typography component="p" style={{marginBottom: '62px'}}>
              Potencialize a sua gestão agrícola integrando
              <br/>
              diversas tecnologias e serviços ao Aegro:
            </Typography>
            {inDesktop && <div style={{marginBottom: '80px'}}>
              <HiOutlineArrowDown color="#00C65E" size={32} />
            </div>}
          </Box>
          <IntergrationsContainer container id="tipos-de-integracoes">
            <Integration
              title={<>Monitoramento de <br/> pragas e doenças</>}
              description="
              Você pode tornar o seu MIP mais eficaz, registrando o
              monitoramento e o armadilhamento da lavoura pelo celular.
              Gere relatórios sobre a incidência das suas pragas-alvo e
              descubra o momento certo para pulverizar, reduzindo custos
              com defensivos.
            "
              icon={monitoramento}
            />
            <Integration
              title={<>Imagens <br/> de satélite</>}
              description="
              Receba imagens de satélite atualizadas da sua propriedade e
              use o Índice de Vegetação Normalizada (NDVI) para verificar
              a saúde do cultivo remotamente. Assim, você poupa tempo na
              detecção de anomalias e foca o manejo onde é mais
              necessário.
            "
              icon={satelite}
            />
            <Integration
              title={<>Livro Caixa <br/>  do Produtor Rural</>}
              description="
              Um jeito prático de organizar os informes da fazenda para
              cumprir com as suas obrigações fiscais, como o LCDPR e o IR.
              E o melhor: sem interferir no seu controle de caixa. A
              gestão financeira e fiscal ficam separadas no Aegro.
            "
              icon={caixa}
            />
            <Integration
              title={<>Previsões <br/> climáticas</>}
              description="
              Tenha acesso à previsão do tempo na sua propriedade usando a
              nossa integração com a Climatempo. Dados meteorológicos
              precisos como temperatura, vento, chuva e umidade são
              fundamentais para programar as suas operações de campo.
            "
              icon={previsoes}
            />
          </IntergrationsContainer>
        </div>
      </Container>
    </StyledFourthSection>
  )
}

const StyledFourthSection = styled.section`
  background-color: white;

  p {
    color: #333333;
    font-size: 18px;
    font-style: normal;
    text-align: center;
    font-weight: 400;
    line-height: 20px;

    @media (max-width:959.95px) {
      color: #777777;
      font-size: 14px;
      text-align: left;
      font-weight: 400;
      line-height: 20px;
    }
  }
`

const SectionTitle = styled(Typography)`
  color: #333333;
  font-size: 50px;
  font-style: normal;
  margin-top: 100px;
  text-align: center;
  font-weight: bold;
  line-height: 50px;
  margin-bottom: 27px;

  @media (max-width: 959.95px) {
    font-size: 26px;
    margin-top: 80px;
    text-align: left;
    font-weight: 700;
    line-height: 26px;
  }
`

const IntergrationsContainer = styled(Grid)`
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 600px) {
    width: 75%;
  }
`

export default FourthSection
