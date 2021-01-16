import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const TypographyH1 = styled(Typography)`
  font-size: 26px;
  font-weight: bold;
  font-family: 'Montserrat';
  line-height: 1;
  letter-spacing: 0;
  @media (min-width: 600px)
  {
    font-size: 40px;
  }
`