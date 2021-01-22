import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const AnchorScrollButton = ({children, scrollTo, ...rest}) => {
  const executeScroll = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(scrollTo);

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }; 

  return (
    <StyledAnchorScrollButton 
      variant="contained" 
      color="secondary" 
      {...rest}
      onClick={executeScroll}>
      {children}
    </StyledAnchorScrollButton>
  )
}

const StyledAnchorScrollButton = styled(Button)`
  width: 40px;
  max-height: 68px;
  height: 40px;
  padding: 12px;
  border-radius: 0 100px 100px 100px;

  @media (max-width:959.95px) {
    min-width: 0;
  }

  @media (min-width:600px) {
    width: 60px;
    height: 60px;
    padding: 18px;
  }

`

export default AnchorScrollButton
