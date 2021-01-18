import React from 'react'
import styled from 'styled-components'
import { Container, Typography } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'

const SecondSection = () => {
  const {manifestGif} = useStaticQuery(graphql`
  query {
    manifestGif: file(relativePath: { eq: "Manifesto.gif" }) {
      publicURL
    }
  }
`
  )

  return (
    <section id="manifesto" style={{backgroundColor: 'white'}}>
      <Container maxWidth="lg">
        <Wrapper>
          <ManifestContent>
            <Title variant="h1" compontent="h1" >#MANIFESTO</Title>
            <Paragraph variant="body1" compontent="p">
              Nascemos do campo para o campo, sabendo que ninguém conhece uma fazenda como o seu produtor. Portanto, entendemos que é entregando as ferramentas certas nas mãos de quem produz que nós ajudamos a agricultura a evoluir.
            </Paragraph>
            <Paragraph variant="body1" compontent="p">
              Unimos a rotina da lavoura à gestão financeira, centralizando informações para tornar a vida do profissional rural mais eficiente. Desta forma, aprimoramos o controle de processos produtivos e entregamos soluções para a gestão de fazendas.
            </Paragraph>
          </ManifestContent>
          <div style={{flex: '1 1 0%'}}></div>
          <GifContainer>
            <img src={manifestGif.publicURL} alt="" width="100%" />
          </GifContainer>
        </Wrapper>
      </Container>
    </section>
  )
}

const Wrapper = styled.div`
  box-sizing: border-box;
  padding-top: 60px;
  padding-left: 14px;
  padding-right: 14px;
  padding-bottom: 0;

  @media (min-width: 600px) {
    height: 100vh;
    display: flex;
    max-height: 1080px;
    min-height: 640px;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`

const ManifestContent = styled.div`
  max-width: 413px;

  @media (min-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

const GifContainer = styled.div`
  padding: 5px 30px;

  @media (min-width: 600px) {
    max-width: 560px;
  }
`

const Title = styled(Typography)`
  color: #333;
  font-size: 14px;
  margin-bottom: 25px;
  letter-spacing: 2.5px;
`

const Paragraph = styled(Typography)`
  color: #333;
  line-height: 1.43;
  margin-bottom: 19px;

  @media (min-width: 600px) {
    font-size: 18px;
    line-height: 1.11;
  }
`

export default SecondSection
