import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { Link } from 'gatsby'

const NavLink = ({children, to, ...rest}) => {
  return (
    <ButtonStyles color="inherit" component={Link} to={to} disableElevation {...rest}>
      {children}
    </ButtonStyles>
  )
}

export const ButtonStyles = styled(Button)`
  && {
  font-size: 14px;
  font-style: normal;
  letter-spacing: 2.5px;
  }
` 

export default NavLink
