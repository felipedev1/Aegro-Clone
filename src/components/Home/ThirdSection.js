import React, { useState } from 'react'
import styled from 'styled-components'
import { AppBar, Container, Tab } from '@material-ui/core'

import StyledButton from '../StyledButton'
import { TypographyH1 } from '../SharedStyledComponents'
import DemonstrationTabPanel from './DemonstrationTabPanel'

import operacionalVideo from '../../assets/videos/operacional.mp4'
import financeiroVideo from '../../assets/videos/financeiro.mp4'
import estoqueVideo from '../../assets/videos/estoque.mp4'
import patrimonioVideo from '../../assets/videos/operacional.mp4'
import indicadoresVideo from '../../assets/videos/indicadores.mp4'
import { TabList, TabContext } from '@material-ui/lab'

const ThirdSection = () => {
  const [tabShown, setTabShown] = useState("1")

  return (
    <StyledThirdSection>
      <SectionContainer maxWidth="lg">
        <ContentWrapper>
          <SectionTitle variant="h1" component="h1">
            Mais controle sobre sua fazenda
          </SectionTitle>
          <TabContext value={tabShown}>
            <SectionHeader position="static" elevation={0}>
              <StyledTabList
                style={{ minHeight: '28px' }}
                aria-label="Demonstração do Software de Gestão Agrícola Aegro"
                onChange={(event, newTab) => setTabShown(newTab)}
              >
                <Tab label="Operacional" value="1" />
                <Tab label="Financeiro" value="2" />
                <Tab label="Estoque" value="3" />
                <Tab label="Patrimônio" value="4" />
                <Tab label="Indicadores" value="5" />
              </StyledTabList>
            </SectionHeader>
            <DesktopTabContainer>
              <DemonstrationTabPanel value="1" videoSrc={operacionalVideo} />
              <DemonstrationTabPanel value="2" videoSrc={financeiroVideo} />
              <DemonstrationTabPanel value="3" videoSrc={estoqueVideo} />
              <DemonstrationTabPanel value="4" videoSrc={patrimonioVideo} />
              <DemonstrationTabPanel value="5" videoSrc={indicadoresVideo} />
            </DesktopTabContainer>
          </TabContext>
          <div>
            <ButtonToApp 
              to="/produto"
              disableElevation 
              variant="contained"
              color="secondary"
            >
              Conheça o produto
            </ButtonToApp>
          </div>
        </ContentWrapper>
      </SectionContainer>
    </StyledThirdSection>
  )
}

const StyledThirdSection = styled.section`
  height: 100vh;
  max-height: 1080px;
  min-height: 640px;
`

const SectionContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  box-sizing: border-box;
  max-height: 580px;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;
  padding-bottom: 50px;
  justify-content: space-between;

  @media (min-width: 600px) {
    max-height: 720px;
  }
`

const SectionTitle = styled(TypographyH1)`
  max-width: 450px;
  text-align: center;
`

const SectionHeader = styled(AppBar)`
  display: flex;
  z-index: 0;
  margin-top: 10px;
  align-items: center;
  margin-bottom: 10px;
  color: #fff;
  background-color: #00C65E;
`

const StyledTabList = styled(TabList)`
  min-height: 28px;
  margin-bottom: 10px;

  button {
    letter-spacing: 2px;
    min-height: 28px;
    font-weight: 500;
  }

  .MuiTabs-indicator {
    position: relative;
    background-color: transparent;
    bottom: 0;
    height: 2px;
    width: 160px;
    position: absolute;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 100%;
      width: 100%;
      max-width: 50%;
      background-color: white;
    }
  }
`

const DesktopTabContainer = styled.div``

const ButtonToApp = styled(StyledButton)`
  font-size: 15px;
  margin-top: 20px;
  max-height: 36px;
  padding-top: 10px;
  border-color: white;
  padding-left: 20px;
  margin-bottom: 10px;
  padding-right: 20px;
  letter-spacing: 2.4px;
  padding-bottom: 10px;
` 

export default ThirdSection
