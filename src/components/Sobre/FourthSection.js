import React from 'react'
import styled from 'styled-components'
import { Button, Container, Typography } from '@material-ui/core'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { BsArrowRightShort } from 'react-icons/bs'

const FourthSection = () => {
  const employeesGif = useStaticQuery(graphql`
  query {
    RaissaGif: file(relativePath: { eq: "Raissa.gif" }) {
      publicURL
    }
    LucasGif: file(relativePath: { eq: "Lucas.gif" }) {
      publicURL
    }
    BrasilGif: file(relativePath: { eq: "Brasil.gif" }) {
      publicURL
    }
    DaniGif: file(relativePath: { eq: "Dani.gif" }) {
      publicURL
    }
    socio1Gif: file(relativePath: { eq: "socio1.gif" }) {
      publicURL
    }
    socio3Gif: file(relativePath: { eq: "socio3.gif" }) {
      publicURL
    }
  }
`
  )

  const gifSources = [
    employeesGif.RaissaGif.publicURL,
    employeesGif.LucasGif.publicURL,
    employeesGif.BrasilGif.publicURL,
    employeesGif.DaniGif.publicURL,
    employeesGif.socio1Gif.publicURL,
    employeesGif.socio3Gif.publicURL,
  ]

  return (
    <StyledFourthSection>
      <SectionDivision>
        <div style={{flex: '1 1 0%'}}></div>
        <div style={{
          maxWidth: '640px',
          width: '100vw', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center'
        }}>
          <Container maxWidth="lg">
            <TextContent>
              <Typography variant="h1" component="h1">
                Quer fazer parte
                <br/>
                da equipe Aegro?
              </Typography>
              <Typography variant="body1" component="p" style={{maxWidth: '400px'}}>
                Somos uma equipe focada em eficiência, plural e multidisciplinar, formada por profissionais de áreas de como agronomia, desenvolvimento, marketing e design. Assim, conseguimos ser cada dia mais eficazes para gerar um impacto real e positivo na agricultura.
              </Typography>
              <Button 
                variant="text"
                color="primary"
                component={Link}
                to="https://jobs.kenoby.com/aegro"
                target="_blank"
              >
                Cadastre-se
                <span style={{marginLeft: '9px', marginTop: '8px'}}>
                  <BsArrowRightShort size={24} />
                </span>
              </Button>
            </TextContent>
          </Container>
        </div>
      </SectionDivision>
      <SectionDivision>
        <EmployeesContainer>
          {employeesGif && gifSources.map((gifSource, index) => {
            return (
              <Employee key={index} number={index}>
                <img src={gifSource} alt="" width="100%" height="100%" />
              </Employee>
            )
          })}
        </EmployeesContainer>
      </SectionDivision>
    </StyledFourthSection>
  )
}

const StyledFourthSection = styled.section`
  background-color: white;

  @media (min-width: 960px) {
    display: flex;
    max-height: 1040px;
  }
`

const SectionDivision = styled.div`
  flex: 1;

  @media (min-width: 960px) {
    width: 50vw;
    display: flex;
  }
`

const TextContent = styled.div`
  padding-top: 80px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 57px;

  @media (min-width: 960px) {
    padding-top: 0;
    padding-left: 35px;
    padding-right: 35px;
    padding-bottom: 30px;
  }

 
  h1 {
    color: #333;
    margin-bottom: 36px;

    @media (min-width:960px) {
      margin-bottom: 30px;
    }
  }

  p {
    color: #333;
    max-width: 450px;
    line-height: 1.43;
    margin-bottom: 20px;

    @media (min-width:960px) {
      line-height: 1;
      margin-bottom: 35px;
    }
  }
`

const EmployeesContainer = styled.div`
  width: 100%;
  max-width: 675px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "employee1 employee2 employee3"
    "employee4 employee5 employee6"
  ;
  

  @media (min-width: 960px) {
    grid-template-columns: repeat(3, minmax(0px, 225px));
    grid-template-areas:
      ". employee1 ."
      "employee2 . employee3"
      ". employee4 ."
      "employee5 . employee6"
    ;
  }
`

const Employee = styled.div`
  grid-area: ${props => `employee${props.number + 1}`};
`

export default FourthSection
