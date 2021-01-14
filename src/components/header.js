import React, { useState, useEffect } from "react"
import { AppBar, Container } from '@material-ui/core'
import styled from 'styled-components'

import logo from '../images/logo.svg'
import NavLink from "./NavLink"

const Header = () => {

  const [atPageTop, setAtPageTop] = useState(true)

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY
      setAtPageTop(yPos === 0)
    }

    window.addEventListener('scroll', handleScroll, false)

    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }
  }, [atPageTop])


  return (
    <AppBar elevation={atPageTop ? '0' : '4'}
      position={atPageTop ? 'absolute' : 'fixed'}
      style={{
        background: atPageTop ? 'transparent' : 'rgba(0, 198, 94)',
        transform: 'none',
        transition: 'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms'
      }
      }>
      <Container maxWidth="lg">
        <HeaderWrapper>
          <NavLink to="/" >
            <img src={logo} alt="Aegro" style={{ width: '100%' }} />
          </NavLink>
          <div style={{ flexGrow: 1 }}></div>
          <Navigation>
            <NavWrapper>
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
              <OutlinedNavLink to="https://app.aegro.com.br/login" target="_blank">
                Teste Gratis
              </OutlinedNavLink>
              <NavLink to="https://app.aegro.com.br/login" target="_blank">
                Login
              </NavLink>
            </NavWrapper>
          </Navigation>
        </HeaderWrapper>
      </Container>
    </AppBar>
  )
}

export const HeaderWrapper = styled.div`

display: flex;
align-items: center;
padding-top: 14px;
padding-left: 6px;
padding-right: 6px;
padding-bottom: 14px;

@media (min-width: 600px) {
  padding-top: 11px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 11px;
}
`

export const Navigation = styled.div`
  display: none;
  flex-grow: 1;
  max-width: 817px;

  @media (min-width: 960px) {
    display: flex;
  }
`

export const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
`

export const OutlinedNavLink = styled(NavLink)`
  &.root {
    max-height: 36px;
    line-height: 1;
    margin-left: 10px;
    padding-top: 10px;
    white-space: nowrap;
    margin-right: 10px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 100px;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    border-color: white;
    border-width: 1px;
    border-style: solid;
  }
`

export default Header
