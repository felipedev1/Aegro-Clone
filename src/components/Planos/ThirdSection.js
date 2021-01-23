import React from 'react'
import styled from 'styled-components'
import { Container, Typography, Button } from '@material-ui/core'
import { ContentWrapper } from './styles'

import orbia from '../../images/orbia.jpg'
import seedz from '../../images/seedz.jpg'
import sicredi from '../../images/sicredi.jpg'
import basf from '../../images/basf.jpg'
import syngenta from '../../images/syngenta.jpg'

const ThirdSection = () => {
  return (
    <section style={{backgroundColor: 'white', color: 'rgb(51, 51, 51)'}}>
      <Container maxWidth="lg">
        <SectionWrapper>
          <Typography variant="h1" component="h1" style={{textAlign: 'center'}}>
            Conheça nossos parceiros
          </Typography>
          <Typography variant="body1" component="p" 
            style={{maxWidth: '585px', textAlign: 'center',}}
          >
            Queremos facilitar o acesso de cada vez mais fazendas ao Aegro.
            <br/>
            Por&nbsp;isso, fazemos parte dos principais programas de benefícios do Brasil.
          </Typography>
          <div style={{height: '56px'}}></div>
          <Partners>
            <Button
              component="a" 
              variant="text" 
              className="brand"
              href="https://www.orbia.ag/produto/33324/BY4029/0/aegro-software-para-gestao-de-custos-e-planejamento-de-safra-"
              target="_blank"
            >
              <div>
                <img src={orbia} alt="Orbia"/>
              </div>
            </Button>
            <Button 
              component="a" 
              variant="text" 
              className="brand"
              href="https://www.orbia.ag/produto/33324/BY4029/0/aegro-software-para-gestao-de-custos-e-planejamento-de-safra-"
              target="_blank"
            >
              <div>
                <img src={seedz} alt="Seedz"/>
              </div>
            </Button>
            <div className="brand">
              <img src={sicredi} alt="Sicredi"/>
            </div>
            <div className="brand">
              <img src={basf} alt="O-Basif"/>
            </div>
            <div className="brand">
              <img src={syngenta} alt="Syngenta"/>
            </div>
          </Partners>
        </SectionWrapper>
      </Container>
    </section>
  )
}

const SectionWrapper = styled(ContentWrapper)`
  display: flex;
  min-height: 640px;
  flex-direction: column;
  align-items: center;
`

const Partners = styled.div`
  width: 100%;
  text-align: center;

  .brand {
    float: left;
    width: calc(50% - 30px);
    padding: 0;
    margin-left: 15px;
    margin-right: 15px;
  }
  .brand img {
    width: 100%;
  }

  @media (min-width:600px) {
    display: flex;
    align-items: center;
    justify-content: space-around;

    .brand {
      width: calc(30% - 30px);
      max-width: 180px;
    }
  }
`

export default ThirdSection
