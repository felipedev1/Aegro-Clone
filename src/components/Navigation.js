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
      <NavLink to="https://blog.aegro.com.br" target="_blank">
        Blog
      </NavLink>
      <NavLink to="/contato">
        Contato
      </NavLink>
      <StyledButton to="https://app.aegro.com.br/login" target="_blank" variant="outlined">
        Teste Grátis
      </StyledButton>
      <NavLink to="https://app.aegro.com.br/login" target="_blank">
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
