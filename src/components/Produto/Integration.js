import React from 'react'
import styled from 'styled-components'
import { Grid, Typography, useMediaQuery } from '@material-ui/core'

const Integration = ({title, description, icon}) => {
  const inMobile = useMediaQuery('(max-width:600px)')

  return (
    <StyledIntegration container item
      direction="column"
      alignItems={inMobile ? "flex-start" : "center"}
      justify="center"
      sm={6}
    >
      <img src={icon} alt={title} />
      <Typography variant="h2" component="h2">
        <span>{title}</span>
      </Typography>
      <Typography component="p">{description}</Typography>
    </StyledIntegration>
  )
}

const StyledIntegration = styled(Grid)`
  padding: 0 45px;
  margin-bottom: 7rem;

  img {
    width: 45px;
    height: 45px;
    display: block;
    margin-bottom: 23px;
  }
  h2 {
    color: #333333;
    font-size: 30px;
    font-style: normal;
    text-align: center;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 23px;
  }

  @media (max-width:959.95px) {
    padding: 0;
    margin-bottom: 3.5rem;

    h2 {
      font-size: 20px;
      text-align: left;
      font-weight: 700;
      line-height: 20px;
      margin-bottom: 20px;
    }

    img {
      width: 28px;
      height: 29px;
      margin-bottom: 17px;
    }
  }
`

export default Integration
