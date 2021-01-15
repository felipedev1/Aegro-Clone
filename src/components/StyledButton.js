import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const StyledButton = ({children, to, ...rest}) => {
  const classes = useStyles()
  return (
    <ButtonStyles 
      color="inherit" 
      component={Link} 
      to={to} 
      disableElevation 
      {...rest}
    >
      {children}
    </ButtonStyles>
  )
}

const useStyles = makeStyles({
  containedPrimary: {
    backgroundColor: '#00C65E',
    color: '#FFF',
    border: 'none',
    '&:hover': {
      backgroundColor: 'rgb(0, 138, 65)',
    }
  },
  containedSecondary: {
    color: '#00C65E',
    backgroundColor: '#FFF',
    border: 'none',
    '&:hover': {
      backgroundColor: '#d5d5d5',
    }
  },
  outlined: {
    border: '1px solid #FFF',
    padding: '5px 15px',
  },
  outlinedPrimary: {
    background: 'transparent',
    color: '#FFF',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
      borderColor: '#FFF'
    }
  },
  text: {
    padding: '6px 8px'
  },
  textPrimary: {
    color: '#00C65E'
  },
  textSecondary: {
    color: '#FFF'
  }
}, { name: 'MuiButton' });

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
