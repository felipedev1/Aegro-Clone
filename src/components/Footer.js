import { Container, Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import StyledButton from './StyledButton'

import logo from '../images/logo.svg'
import googlePlay from '../images/googlePlay.svg'
import appStore from '../images/appStore.svg'
import blogAegro from '../images/blogAegro.svg'
import whatsapp from '../images/whatsapp.svg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import youtube from '../images/youtube.svg'
import linkedin from '../images/linkedin.svg'

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Navigation>
          <LogoAtTop src={logo} />
          <NavFlexItem>
            <Typography variant="h2" compontent="h2">Aegro</Typography>
            <StyledButton variant="text" color="secondary"
              to="https://conhecimento.aegro.com.br/contato-consultores"
              target="_blank"
            >
              Programa de Parcerias
            </StyledButton>
            <StyledButton variant="text" color="secondary" to="/sobre">
              Quem Somos
            </StyledButton>
            <StyledButton variant="text" color="secondary"
              to="https://jobs.kenoby.com/aegro"
              target="_blank"
            >
              Trabalhe Conosco
            </StyledButton>
            <StyledButton variant="text" color="secondary"
              to="https://aegro.com.br/compartilhando-beneficios"
              target="_blank"
            >
              Compartilhando Benefícios
            </StyledButton>
          </NavFlexItem>

          <NavFlexItem>
            <Typography variant="h2" compontent="h2">Produto</Typography>
            <StyledButton variant="text" color="secondary" to="/produto">
              Aplicativo
            </StyledButton>
            <StyledButton variant="text" color="secondary" to="/produto#integracoes">
              Integrações
            </StyledButton>
            <StyledButton variant="text" color="secondary" to="/">
              Planos
            </StyledButton>
          </NavFlexItem>

          <NavFlexItem>
            <Typography variant="h2" compontent="h2">Conteúdo</Typography>
            <StyledButton variant="text" color="secondary"
              to="https://blog.aegro.com.br/"
              target="_blank"
            >
              Blog Lavoura 10
            </StyledButton>
            <StyledButton variant="text" color="secondary"
              to="https://cursos.aegro.com.br/"
              target="_blank"
            >
              Treinamentos
            </StyledButton>
            <StyledButton variant="text" color="secondary"
              to="https://suporte.aegro.com.br/"
              target="_blank"
            >
              Central de Ajuda
            </StyledButton>
          </NavFlexItem>

          <NavFlexItem>
            <Typography variant="h2" compontent="h2">Fale Conosco</Typography>
            <StyledButton variant="text" color="secondary"
              compontent="a"
              href="tel:+555131039490"
              target="_blank"
            >
              (51) 3103-9490
            </StyledButton>
            <StyledButton variant="text" color="secondary"
              compontent="a"
              href="mailto:contato@aegro.com.br"
              target="_blank"
            >
              contato@aegro.com.br
            </StyledButton>
            <StyledButton variant="text" color="secondary"
              to="https://api.whatsapp.com/send?phone=5551997859135&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Aegro"
              target="_blank"
            >
              (51) 99785-9135
              <span style={{ marginLeft: '10px', display: 'flex' }}>
                <img src={whatsapp} alt="whatsapp" />
              </span>
            </StyledButton>
          </NavFlexItem>

          <NavFlexItem>
            <Typography variant="h2" compontent="h2">Transparência</Typography>
            <StyledButton variant="text" color="secondary"
              to="https://aegro.com.br/politica-de-privacidade"
              target="_blank"
            >
              Políticas de Privacidade
            </StyledButton>
            <StyledButton variant="text" color="secondary"
              to="https://aegro.com.br/termos-de-uso"
              target="_blank"
            >
              Termos de Uso
            </StyledButton>
            <StyledButton variant="text" color="secondary"
              to="https://aegro.com.br/pt/downloads/manual-aegro-maio-2019.pdf"
              target="_blank"
            >
              Manual do Usuário
            </StyledButton>
          </NavFlexItem>
        </Navigation>
      </Container>
      <Container maxWidth="lg">
        <SocialNav>
          <LogoAtBotton src={logo} alt />
          <Downloads>
            <a 
              href="https://play.google.com/store/apps/details?id=com.aegro.aegroapp"
              target="_blank"
              rel="noopener noreferrer"
              style={{width: '44.6829%'}}
            >
              <img src={googlePlay} alt="Google Play" width="100%" />
            </a>
            <a 
              href="https://apps.apple.com/br/app/aegro-gest%C3%A3o-rural/id1105392365"
              target="_blank"
              rel="noopener noreferrer"
              style={{width: '39.9%'}}
            >
              <img src={appStore} alt="App Store" width="100%" />
            </a>
          </Downloads>
          <div style={{flexGrow: 1, width: '100%', paddingLeft: '12px', paddingRight: '12px'}}>
            <LocationAtTop variant="body1" component="p">
              Av. Osvaldo Aranha 1022/1109.
              <br/>
               Bom Fim - Porto Alegre, RS
            </LocationAtTop>
          </div>
          <SocialNetworks>
            <StyledButton variant="text" color="secondary"
                to="https://blog.aegro.com.br/"
                target="_blank"
            >
              <img src={blogAegro} alt="blog" />
            </StyledButton>
            <StyledButton variant="text" color="secondary"
                to="https://api.whatsapp.com/send?phone=5551997859135&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Aegro"
                target="_blank"
            >
              <img src={whatsapp} alt="whatsapp" />
            </StyledButton>
            <StyledButton variant="text" color="secondary"
                to="https://www.facebook.com/aegro/"
                target="_blank"
            >
              <img src={facebook} alt="facebook" />
            </StyledButton>
            <StyledButton variant="text" color="secondary"
                to="https://www.instagram.com/aegrofarming/"
                target="_blank"
            >
              <img src={instagram} alt="instagram" />
            </StyledButton>
            <StyledButton variant="text" color="secondary"
                to="https://www.youtube.com/channel/UCFhEvVp1JKWNI8-eGzjxOYw"
                target="_blank"
            >
              <img src={youtube} alt="youtube" />
            </StyledButton>
            <StyledButton variant="text" color="secondary"
                to="https://www.linkedin.com/company/aegro/"
                target="_blank"
            >
              <img src={linkedin} alt="linkedin" />
            </StyledButton>
          </SocialNetworks>
        </SocialNav>
      </Container>
      <Container maxWidth="lg">
        <Licences>
          <LocationAtBottom>
            <Typography variant="body1" component="p" style={{fontSize: "14px"}} >
              Av. Osvaldo Aranha 1022/1109. Bom Fim - Porto Alegre, RS
            </Typography>
          </LocationAtBottom>
          <Typography variant="body1" component="p" style={{fontSize: "14px"}} >
            Copyright 2014 – 2020 Aegro. Todos os direitos reservados.
          </Typography>
        </Licences>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding-top: 69px;
  margin-bottom: 40px;
  
  @media (max-width: 959.95px) {
    padding-top: 49px;
  }
`

const Navigation = styled.div`
  display: flex;
  padding-left: 38px;
  padding-right: 38px;
  justify-content: space-between;

  @media (max-width: 1069.95px) {
    padding-left: 12px;
    padding-right: 12px;
    flex-direction: column;
  }
`

const LogoAtTop = styled.img`
  display: none;

  @media (max-width: 959.95px) {
    width: 111px;
    display: flex;
    margin-bottom: 12px;
  }
`

const LogoAtBotton = styled.img`
  width: 530px;
  margin-top: 2px;

  @media (max-width: 959.95px) {
    display: none;
  }
`

const NavFlexItem = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width:1069.95px) {
    margin-top: 30px;
  }

  a {
    color: white;
    font-size: 17px;
    min-width: 0;
    text-align: left;
    font-weight: 700;
    padding-top: 1px;
    padding-left: 0;
    padding-right: 0;
    letter-spacing: 1px;
    padding-bottom: 1px;
    text-transform: none;

    @media (max-width:599.95px) {
      font-size: 13px;
    }
  }

  h2 {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 16px;
    letter-spacing: 2.5px;
    text-transform: uppercase;

    @media (max-width:599.95px) {
      font-size: 11px;
      margin-top: 3px;
      margin-bottom: 0;
    }
  }
`

const SocialNav = styled.div`
  display: flex;
  align-items: center;
  padding-top: 35px;
  padding-left: 38px;
  padding-right: 38px;

  @media (max-width: 959.95px) {
    padding-top: 16px;
    padding-left: 12px;
    padding-right: 12px;
    flex-direction: column;
  }
`

const Downloads = styled.div`
  width: 100%;
  display: flex;
  max-width: 300px;
  margin-top: 14px;
  margin-left: 93px;
  justify-content: space-between;

  @media (max-width: 959.95px) {
    margin-left: 0;
    padding-left: 12px;
    padding-right: 12px;
  }
`

const LocationAtTop = styled(Typography)`
  display: none;

  @media (max-width: 959.95px) {
    display: block;
    margin-top: 52px;
  }
`
const LocationAtBottom = styled.div`
    flex-grow: 1;

  @media (max-width: 959.95px) {
    display: none;
  }
`

const SocialNetworks = styled.div`
  width: 100%;
  display: flex;
  max-width: 330px;
  margin-top: 4px;
  margin-left: 0;
  margin-right: 0;
  justify-content: space-between;

  a {
    min-width: 0;
    padding: 7px;
    border-radius: 3px;
  }
`

const Licences = styled.div`
  display: flex;
  padding-top: 37px;
  padding-left: 38px;
  padding-right: 38px;

  @media (max-width: 959.95px) {
    padding-top: 30px;
    padding-left: 12px;
  }

`

export default Footer
