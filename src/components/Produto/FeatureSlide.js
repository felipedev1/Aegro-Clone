import React from 'react'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import desktop from '../../images/desktop-mobile-format.svg'

const FeatureSlide = ({ title, description, gifUrl }) => {
  return (
    <SlideWrapper>
      <GifContainer>
        <DesktopFormat src={desktop} />
        <Gif src={gifUrl} alt={title} />
      </GifContainer>
      <div style={{marginTop:'10px'}}>
        <Typography variant="h3" component="h3">{title}</Typography>
        <Typography variant="body1" component="p">{description}</Typography>
      </div>
    </SlideWrapper>
  )
}

const SlideWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
`

const GifContainer = styled.div`
  width: 250px;
  height: 180px;
  padding: 5px;
  box-sizing: border-box;

  @media (min-width: 360px){
    width: 280px;
  }

  @media (min-width: 600px){
    width: 360px;
    height: 210px;
  }
`

const DesktopFormat = styled.img`
  width: 250px;
  position: absolute;

  @media (min-width: 360px) {
    width: 280px;
  }
  
  @media (min-width: 600px) {
    width: 360px;
  }
`

const Gif = styled.img`
  width: 215px;
  margin-top: 2px;
  margin-left: 21px;

  @media (min-width: 360px) {
    width: 244px;
    margin-top: 2px;
    margin-left: 22px;
  }

  @media (min-width: 600px) {
    width: 312px;
    margin-top: 2px;
    margin-left: 30px;
  }
`

export default FeatureSlide
