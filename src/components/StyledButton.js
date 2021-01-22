import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const StyledButton = ({children, ...rest}) => {
  return (
    <ButtonStyles 
      color="inherit" 
      component="a" 
      disableElevation 
      {...rest}
    >
      {children}
    </ButtonStyles>
  )
}

export const ButtonStyles = styled(Button)`
  font-size: 15px;
  max-height: 48px;
  font-weight: 600;
  padding-top: 7px;
  padding-left: 19px;
  padding-right: 19px;
  letter-spacing: 1.5px;
  padding-bottom: 7px;
  border-top-left-radius: 0;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
`

export default StyledButton
