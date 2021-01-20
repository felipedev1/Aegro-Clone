import React from 'react'
import styled from 'styled-components'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core'
import { BsPlus } from 'react-icons/bs'

const FeatureAccordion = ({title, description, expanded, ...rest}) => {
  return (
    <StyledAccordion expanded={expanded} {...rest} style={{pointerEvents: expanded ? 'none' : 'initial'}} >
      <AccordionSummary
        expandIcon={expanded ? null : <BsPlus />}
        style={{paddingLeft:0, paddingRight:0}}
      >
        <Typography variant="h3" component="h3">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails style={{paddingLeft:0, paddingRight:0}}>
        <Typography component="p">
          {description}
        </Typography>
      </AccordionDetails>
    </StyledAccordion>
  )
}

const StyledAccordion = styled(Accordion)`
  box-shadow: none;
  margin: auto;

  &:not(:last-of-type) {
    border-bottom: 1px solid #CCCCCC;
  }

  &:before {
    content: none;
  }
  h3 {
    margin: 8px 0 8px;
  }
`

export default FeatureAccordion
