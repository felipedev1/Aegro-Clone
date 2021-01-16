import React from 'react'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import desktop from '../../images/desktop-image.svg'

const DemonstrationSlide = ({title, gifUrl}) => {
  return (
    <div>
      <Title variant="h2" component="h2">
        {title}
      </Title>
      <GifContainer>
        <DesktopFormat src={desktop} />
        <Gif src={gifUrl} alt={title} />
      </GifContainer>
    </div>
  )
}

const Title = styled(Typography)`
  font-size: 14px;
  text-align: center;
  letter-spacing: 2.4px;
  text-transform: uppercase;
`

const GifContainer = styled.div`
  width: 320px;
  height: 210px;
  box-sizing: border-box;
  margin-top: 30px;
  margin-bottom: 10px;
`

const DesktopFormat = styled.img`
  width: 320px;
  position: absolute;
`

const Gif = styled.img`
  width: 290px;
  margin-top: 3px;
  margin-left: 15px;
`

export default DemonstrationSlide
