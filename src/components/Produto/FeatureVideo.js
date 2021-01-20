import React from 'react'
import styled from 'styled-components'
import DesktopImg from '../../images/desktop-mobile-format.svg'

const FeatureVideo = ({videoSrc}) => {
  return (
    <StyledFeatureVideo>
      <ContainerImg src={DesktopImg} />
      <VideoContainer>
        <video autoPlay loop
          src={videoSrc}
          width="100%" 
          height="100%"
        >
          <track src="./tracking.vtt" kind="captions" srcLang="pt-br" label="Portugues-BR" />
        </video>
      </VideoContainer>
    </StyledFeatureVideo>
  )
}

const StyledFeatureVideo = styled.div`
  width: 83%;
  margin: 25px 0;
  position: relative;
`

const ContainerImg = styled.img`
  width: 100%;
  position: relative;
  z-index: 3;
`

const VideoContainer = styled.div`
  top: 1%;
  right: 5%;
  width: 87%;
  z-index: 2;
  position: absolute;
`

export default FeatureVideo
