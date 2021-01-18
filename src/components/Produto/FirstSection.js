import React from 'react'
import styled from 'styled-components'
import { Button, Container, Typography } from '@material-ui/core'
import { Link } from 'gatsby'
import { HiOutlineArrowDown } from 'react-icons/hi'
import AnchorScrollButton from '../AnchorScrollButton'
import googlePlay from '../../images/googlePlay.svg'
import appStore from '../../images/appStore.svg'

const FirstSection = () => {
  return (
    <StyledFirstSection id="top">
      <Container maxWidth="lg" style={{height: '100%', display: 'flex'}}>
        <Wrapper>
          <div style={{height: '60px'}} ></div>
          <TextContent>
            <div style={{maxWidth: '570px'}}>
              <Typography variant="h1" component="h1" 
                style={{
                  marginBottom: '24px', 
                  letterSpacing: '0.5px'
                }} 
              >
                Acompanhe a trajetória
                <br/>
                completa da safra em
                <br/>
                um só lugar!
              </Typography>
              <Description variant="body1" component="p">
                O Aegro une as áreas operacional e financeira da fazenda para te oferecer um controle eficiente do processo produtivo.
              </Description>
            </div>
          </TextContent>
          <ButtonsWrapper>
            <div>
              <AnchorScrollButton component="a" scrollTo="#recursos" >
                <HiOutlineArrowDown size={24} />
              </AnchorScrollButton>
            </div>
            <div style={{flex: 1}}></div>
            <Downloads>
              <Button component={Link} variant="text"
                to="https://play.google.com/store/apps/details?id=com.aegro.aegroapp"
                target="_blank"
                style={{width: '49.3625%', padding: 0}}
              >
                <img src={googlePlay} alt="Disponivel no Google Play" width="100%" />
              </Button>
              <Button component={Link} variant="text"
                to="https://apps.apple.com/br/app/aegro-gest%C3%A3o-rural/id1105392365"
                target="_blank"
                style={{width: '43.76%', padding: 0}}
              >
                <img src={appStore} alt="Baixar na App Store" width="100%" />
              </Button>
            </Downloads>
          </ButtonsWrapper>
        </Wrapper>
      </Container>
    </StyledFirstSection>
  )
}

const StyledFirstSection = styled.section`
  min-height: 600px;
  max-height: 1080px;
  height: 100vh;
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 82px 14px;
  flex-direction: column;

  @media (min-width: 600px) {
    padding: 50px 36px;
  }
`

const TextContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 60px;

  @media (max-width: 599.95px) {
    margin-bottom: 0;
    flex-direction: column-reverse;
  }
`

const Description = styled(Typography)`
  font-size: 16px;

  @media (min-width: 600px) {
    font-size: 28px;
    line-height: 1.4;
    margin-bottom: 24px;
  }
`

const Downloads = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 327px;
  justify-content: space-between;

  @media (max-width: 599.95px) {
    margin-bottom: 60px;
  }
`

export default FirstSection
