import React from 'react'
import styled from 'styled-components'
import { Container} from '@material-ui/core'
import Layout from '../components/layout'
import Header from '../components/header'
import SEO from '../components/seo'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'
import ContactForm from '../components/Contato/ContactForm'


const contato = ({data}) => {
  const sources = [
    data.mobileBackground.childImageSharp.fluid,
    {
      ...data.desktopBackground.childImageSharp.fluid,
      media: `(min-width: 601px)`,
    }
  ]

  return (
    <Layout>
      <SEO title="Contato" />
      <Header color="secondary" />
      <StyledContact>
        <HalfDiv>
          <div style={{flex: 1}}></div>
          <Content>
            <Container maxWidth="lg" style={{height: '100%'}}>
              <ContactForm />
            </Container>
          </Content>
          <div style={{flex: 1, maxWidth: '70px'}}></div>
        </HalfDiv>
        <HalfDiv>
          <BackgroundImage 
            Tag="div"
            fluid={sources}
            backgroundColor={`#00C65E`}
            style={{minHeight: '100vh', width: '100%'}}
          />
        </HalfDiv>
      </StyledContact> 
    </Layout>
  )
}

const StyledContact = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;

  @media (min-width: 900px) {
    min-height: 100vh;
    flex-direction: row;
  }
`

const HalfDiv = styled.div`
  width: 100vw;
  display: flex;

  @media (min-width: 900px) {
    width: 50vw;
  }
`

const Content = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-top: 119px;
  padding-bottom: 40px;

  @media (min-width: 600px) {
    max-width: 570px;
    padding-bottom: 50px;
  }
`

export const query = graphql`
query contatoQuery {
  desktopBackground: file(relativePath: { eq: "contato-desktop-background.jpg" }) {
    childImageSharp {
      fluid(quality: 100, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  mobileBackground: file(relativePath: { eq: "contato-mobile-background.jpg" }) {
    childImageSharp {
      fluid(quality: 100, maxWidth: 980) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default contato
