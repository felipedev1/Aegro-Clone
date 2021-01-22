import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemText, TextField, Typography } from '@material-ui/core'
import StyledButton from '../StyledButton'

const workplaces = [
  {
    name: "",
    roles: []
  },
  {
    name: 'Propriedade Rural',
    roles: [
      "Proprietário ou sócio",
      "Filho ou sucessor",
      "Gerente",
      "Consultor",
      "Operador agrícola"
    ]
  },
  {
    name: 'Consultoria',
    roles: [
      "Proprietário ou sócio",
      "Gerente",
      "Consultor",
      "Estudante ou estagiário"
    ]
  },
  {
    name: 'Campanha ou Grupo Agrícola',
    roles: [
      "Presidente ou diretor",
      "Gerente",
      "Consultor",
      "Técnico de campo",
      "Estudante ou estagiário"
    ]
  },
  {
    name: 'Cooperativa',
    roles: [
      "Presidente ou diretor",
      "Gerente",
      "Consultor",
      "Estudante ou estagiário"
    ]
  },
  {
    name: 'Revenda de Insumos',
    roles: [
      "Proprietário ou sócio",
      "Gerente",
      "Consultor",
    ]
  },
  {
    name: 'Pesquisa ou Estudos',
    roles: [
      "Estudante ou estagiário",
      "Pesquisador ou professor"
    ]
  },
]

const consultancyTypes = [
  "Agrícola",
  "Financeira ou contábil",
  "Agrícola e financeira",
  "Ainda não possuo um modelo de negócio"
]

const numberOfCustomers = [
  "Ainda não possuo nenhum cliente",
  "Entre 1 e 5 clientes",
  "Entre 6 e 20 clientes",
  "Entre 21 e 50 clientes",
  "Acima de 50 clientes"
]

const agriculturalActivities = [
  "Cultivo de Grãos (arroz, feijão, milho, soja, trigo...)",
  "Cafeicultura",
  "Cultivo de cana",
  "Citricultura",
  "Futricultura e/ou horticultura",
  "Grãos e pecuária",
  "Pecuária",
  "Nenhuma das culturas anteriores"
]

const numberOfHectares = [
  "Até 100 hectares",
  "Entre 101 e 500 hectares",
  "Entre 501 e 1.500 hectares",
  "Entre 1.501 e 3.000 hectares",
  "Entre 3.001 e 5.000 hectares",
  "Entre 5.001 e 10.000 hectares",
  "Mais que 10.001 hectares"
]

const ContactForm = () => {

  const [roles, setRoles] = useState([])

  const [isConsultant, setIsConsultant] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedWorkplace, setSelectedWorkplace] = useState('')
  const [selectedRole, setSelectedRole] = useState('')
  const [consultancy, setConsultancy] = useState('')
  const [customers, setCustomers] = useState('')
  const [selectedAgriculturalActivity, setSelectedAgriculturalActivity] = useState('')
  const [otherActivity, setOtherActivity] = useState('')
  const [hectares, setHectares] = useState('')

  const [showDialog, setShowDialog] = useState(false)

  function handleSelectWorkspace(index) {
    const workplaceName = workplaces[index].name
    setSelectedWorkplace(workplaceName)
    setRoles(workplaces[index].roles)

    const consultant = (
      (workplaceName === 'Consultoria') ||
      (workplaceName === 'Cooperativa') ||
      (workplaceName === 'Revenda de Insumos')
    ) || selectedRole === 'Consultor'

    setIsConsultant(consultant)
  }

  function handleSelectRole(value) {
    setSelectedRole(value)

    const consultant = (
      (selectedWorkplace === 'Consultoria') ||
      (selectedWorkplace === 'Cooperativa') ||
      (selectedWorkplace === 'Revenda de Insumos')
    ) || value === 'Consultor'

    setIsConsultant(consultant)
  }

  function handleSubmit(event) {
    event.preventDefault()

    setShowDialog(true)
  }

  return (
    <FormContainer>
      <StyledForm
        id="contato-site"
        name="contato-site"
        autoComplete="off"
        data-typed-fields
        data-lang="pt-BR"
        onSubmit={handleSubmit}
      >
        <FormTitle variant="h1" component="h1">
          Preencha seus dados para falar conosco:
        </FormTitle>
        <StyledTextField
          variant="outlined"
          label="Nome completo"
          margin="dense"
          required
          onChange={e => setName(e.target.value)}
        />
        <StyledTextField
          variant="outlined"
          label="E-mail"
          type="email"
          margin="dense"
          required
          onChange={e => setEmail(e.target.value)}
        />
        <StyledTextField
          variant="outlined"
          label="Telefone celular com DDD"
          type="tel"
          margin="dense"
          required
          onChange={e => setPhone(e.target.value)}
        />
        <StyledTextField
          variant="outlined"
          label="Onde você trabalha?"
          margin="dense"
          required
          select
          SelectProps={{
            native: true,
          }}
          onChange={event => handleSelectWorkspace(event.target.value)}
        >
          {workplaces.map((option, index) => (
            <option key={index} value={index}>
              {option.name}
            </option>
          ))}
        </StyledTextField>
        <StyledTextField
          variant="outlined"
          label="Qual a sua função?"
          margin="dense"
          required
          select
          SelectProps={{
            native: true,
          }}
          onChange={event => handleSelectRole(event.target.value)}
        >
          <option value="">

          </option>
          {roles.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </StyledTextField>
        {isConsultant && (
          <>
            <StyledTextField
              variant="outlined"
              label="Com que tipo de consultoria você trabalha?"
              margin="dense"
              select
              SelectProps={{
                native: true,
              }}
              onChange={e => setConsultancy(e.target.value)}
            >
              <option value="">

              </option>
              {consultancyTypes.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </StyledTextField>
            <StyledTextField
              variant="outlined"
              label="Quantos clientes você atende atualmente?"
              margin="dense"
              select
              SelectProps={{
                native: true,
              }}
              onChange={e => setCustomers(e.target.value)}
            >
              <option value="">

              </option>
              {numberOfCustomers.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </StyledTextField>
          </>
        )}
        <StyledTextField
          variant="outlined"
          label={isConsultant ?
            "Qual a principal cultura da sua carteira de clientes?" :
            "Qual a sua principal atividade agrícola?"}
          margin="dense"
          required
          select
          SelectProps={{
            native: true,
          }}
          onChange={(event) => setSelectedAgriculturalActivity(event.target.value)}
        >
          <option value="">

          </option>
          {agriculturalActivities.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </StyledTextField>
        {selectedAgriculturalActivity === "Nenhuma das culturas anteriores" && (
          <StyledTextField
            variant="outlined"
            label="Qual o seu cultivo?"
            margin="dense"
            onChange={e => setOtherActivity(e.target.value)}
          />
        )}
        <StyledTextField
          variant="outlined"
          label={isConsultant ?
            "Qual a área total da sua carteira de clientes?" :
            "Com quantos hectares você trabalha?"}
          margin="dense"
          required
          select
          SelectProps={{
            native: true,
          }}
          onChange={e => setHectares(e.target.value)}
        >
          <option value="">

          </option>
          {numberOfHectares.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </StyledTextField>
        <StyledButton
          variant="contained"
          color="primary"
          component="button"
          type="submit"
        >
          Enviar
        </StyledButton>
      </StyledForm>
      <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
        <DialogTitle>Enviado</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Como este site é apenas um clone, não há requisições.
            <br />
            Seus dados preenchidos:
          </DialogContentText>
          <List style={{ maxHeight: '200px' }}>
            <ListItem>
              <ListItemText
                primary="Nome:"
                secondary={name}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="E-mail:"
                secondary={email}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Telefone:"
                secondary={phone}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Trabalho:"
                secondary={selectedWorkplace}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Função:"
                secondary={selectedRole}
              />
            </ListItem>
            {consultancy && <ListItem>
              <ListItemText
                primary="Tipo de consultoria:"
                secondary={consultancy}
              />
            </ListItem>
            }
            {customers && <ListItem>
              <ListItemText
                primary="Número de clientes:"
                secondary={customers}
              />
            </ListItem>
            }
            <ListItem>
              <ListItemText
                primary="Cultura agrícola:"
                secondary={selectedAgriculturalActivity}
              />
            </ListItem>
            {otherActivity && <ListItem>
              <ListItemText
                primary="Nome:"
                secondary={otherActivity}
              />
            </ListItem>
            }
            <ListItem>
              <ListItemText
                primary="Hectares:"
                secondary={hectares}
              />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowDialog(false)}
          >
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </FormContainer>
  )
}



// ---- ////- --- -- - - / - - /- /- - /- ´----

const FormContainer = styled.div`
  display: flex;
  margin-left: 12px;
  margin-right: 12px;
  flex-direction: column;

  @media (min-width: 900px) {
    margin-left: 38px;
  }
`

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const FormTitle = styled(Typography)`
  color: #333333;
  font-size: 26px;
  line-height: 1;
  margin-bottom: 20px;

  @media (min-width: 600px){ 
    font-size: 24px;
  }
`

const StyledTextField = styled(TextField)`
  margin-bottom: 20px;
  border-radius: 30px;

  @media(min-width: 600px) {
    margin-bottom: 24px;
  }

  & > .MuiOutlinedInput-root {
    width: 100%;
    border-radius: 50px;
  }
`

export default ContactForm
