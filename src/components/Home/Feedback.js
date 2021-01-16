import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import star from '../../images/star.svg'

const Feedback = ({title, description, stickerProfile, name, uf}) => {
  return (
    <StyledFeedback>
      <div style={{display: "flex", alignItems: "center"}}>
        <Typography variant="h2" component="h2" >
          {title}
        </Typography>
        <div style={{flex: "1 1 0%"}}></div>
        <div style={{display: 'flex', height: "25px"}}>
          <img src={star} alt="" style={{height: "100%"}} />
          <img src={star} alt="" style={{height: "100%"}} />
          <img src={star} alt="" style={{height: "100%"}} />
          <img src={star} alt="" style={{height: "100%"}} />
          <img src={star} alt="" style={{height: "100%"}} />
        </div>
      </div>
      <div style={{flex: "1 1 0%", marginBottom: "5px"}}>
        <Typography variant="body1" compontent="p" style={{marginTop: "15px"}}>
          {description}
        </Typography>
      </div>
      <img src={stickerProfile} alt="" className="sticker" />
      <div style={{display: "flex", marginTop: "10px"}}>
        <Typography variant="body1" compontent="p">{name}</Typography>
        <div style={{flex: "1 1 0%"}}></div>
        <Typography variant="body1" compontent="p">{uf}</Typography>
      </div>
    </StyledFeedback>
  )
}

const StyledFeedback = styled.div`
  height: 325px;
  display: flex;
  margin-top: 34px;
  margin-left: 47px;
  margin-right: 47px;
  margin-bottom: 34px;
  flex-direction: column;

  h2 {
    font-family: 'Montserrat';
    color: #333333;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 5px;

    @media (min-width:600px) {
      font-size: 40px;
    }
  }

  p {
    color: #333333;
    line-height: 1.4;
    font-family: 'Montserrat';
    font-size: 16px;

    @media (max-width:959.95px) {
      font-size: 14px;
    }
  }

  .sticker {
    width: 41px;

    @media (min-width:600px) {
      width: 70px;
    }
  }

  @media (max-width:959.95px) {
    height: 250px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
`

export default Feedback
