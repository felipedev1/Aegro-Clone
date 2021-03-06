import React, { useState, useEffect } from "react"
import { AppBar, Container, Dialog, IconButton, Slide, useMediaQuery, useScrollTrigger } from '@material-ui/core'
import styled from 'styled-components'
import { MdClose, MdMenu } from 'react-icons/md'

import logoDefault from '../images/logo.svg'
import logoSecondary from '../images/logo-secondary.svg'
import NavLink from "./NavLink"
import Navigation from "./Navigation"

const Header = ({color}) => {

  const pageTopColor = color === 'secondary' ? 'rgb(0, 198, 94)' : '#FFF'
  const pageTopLogo = color === 'secondary' ? logoSecondary : logoDefault

  const trigger = useScrollTrigger()

  const inDesktop = useMediaQuery('(min-width:959.95px)') 

  // always show the header if it is on the desktop, or hide the header on the mobile by scrolling
  const showHeader = inDesktop || (!inDesktop < 959.95 && !trigger)

  const [atPageTop, setAtPageTop] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

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

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };


  return (
    <Slide appear={false} direction="down" in={showHeader} >
      <AppBar elevation={atPageTop ? 0 : 4}
        position={atPageTop ? 'absolute' : 'fixed'}
        style={{
          background: atPageTop ? 'transparent' : 'rgba(0, 198, 94)',
          color: atPageTop ? pageTopColor : '#FFF',
          transform: 'none',
          transition: 'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms'
        }
        }>
        <Container maxWidth="lg">
          <HeaderWrapper>
            <LogoButton to="/" >
              <img src={atPageTop ? pageTopLogo : logoDefault} alt="Aegro" style={{ width: '100%' }} />
            </LogoButton>
            <div style={{ flexGrow: 1 }}></div>

            <ButtonMenu onClick={handleOpenMenu} aria-label="menu">
              <MdMenu color={atPageTop ? pageTopColor : '#FFF'} />
            </ButtonMenu>

            <Dialog fullScreen open={menuOpen} onClose={handleCloseMenu} >
              <LogoButton to="/" style={{ position: 'absolute', top: '14px', left: '22px' }} >
                <img src={logoDefault} alt="Aegro" style={{ width: '100%' }} />
              </LogoButton>
              <FullScreenMenu style={{color: 'white'}}>
                <Navigation />
                <CloseButton onClick={handleCloseMenu} aria-label="close">
                  <MdClose />
                </CloseButton>
              </FullScreenMenu>
            </Dialog>

            <DesktopNav>
              <Navigation color={atPageTop ? pageTopColor : '#FFF'} />
            </DesktopNav>
          </HeaderWrapper>
        </Container>
      </AppBar>
    </Slide>
  )
}

const HeaderWrapper = styled.div`

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

const LogoButton = styled(NavLink)`
  max-width: 142px;
  @media (min-width: 600px){
    max-width: 135px;
  }
`

const DesktopNav = styled.div`
  display: none;
  flex-grow: 1;
  max-width: 817px;

  @media (min-width: 960px) {
    display: flex;
  }
`

const ButtonMenu = styled(IconButton)`
  display: none;

  @media (max-width: 959.95px) {
    display: block;
    min-width: 50px;
  }
`

const FullScreenMenu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00C65E;
`

const CloseButton = styled(IconButton)`
  display: none;
  color: #FFF;

  @media (max-width: 959.95px) {
    top: 29px;
    right: 6px;
    display: block;
    position: fixed;
  }
`

export default Header
