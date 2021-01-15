import React from 'react'
import { TabPanel } from '@material-ui/lab'
import styled from 'styled-components'
import DesktopImg from '../../images/desktop-image.svg'

const DemonstrationTabPanel = ({value, videoSrc}) => {
  return (
    <StyledTabPanel value={value}>
      <ContainerImg src={DesktopImg} />
      <VideoContainer>
        <video autoPlay loop width="100%" height="100%">
          <track src="./tracking.vtt" kind="captions" srcLang="pt-br" label="Portugues-BR" />
          <source src={videoSrc} />
        </video>
      </VideoContainer>
    </StyledTabPanel>
  )
}

const StyledTabPanel = styled(TabPanel)`
  padding: 8px;
  margin-top: 0;
  margin-left: 55px;
  margin-right: 55px;
  margin-bottom: 0;
`

const ContainerImg = styled.img`
  width: 602px;
  height: 322px;
  position: absolute;
  margin-top: -5px;
  margin-left: -51px;
`

const VideoContainer = styled.div`
  width: 500px;
  height: 307px;
`

export default DemonstrationTabPanel
