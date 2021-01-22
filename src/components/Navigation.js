import React from 'react'
import styled from 'styled-components'
import NavLink from './NavLink'
import StyledButton from './StyledButton'

const Navigation = ({color}) => {
  return (
    <StyledNavigation style={{color}}>
      <NavLink to="/">
        Inicio
      </NavLink>
      <NavLink to="/sobre">
        Sobre
      </NavLink>
      <NavLink to="/produto">
        Aplicativo
      </NavLink>
      <NavLink href="https://blog.aegro.com.br" component="a" target="_blank">
        Blog
      </NavLink>
      <NavLink to="/contato">
        Contato
      </NavLink>
      <StyledButton href="https://app.aegro.com.br/login" component="a" target="_blank" variant="outlined">
        Teste Grátis
      </StyledButton>
      <NavLink href="https://app.aegro.com.br/login" component="a" target="_blank">
        Login
      </NavLink>
    </StyledNavigation>
  )
}

const StyledNavigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;

  @media (max-width: 959.95px) {
    width: auto;
    height: 60vh;
    flex-direction: column;
  }
`

export default Navigation
