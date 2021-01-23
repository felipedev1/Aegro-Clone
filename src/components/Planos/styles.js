import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  padding-top: 50px;
  padding-left: 14px;
  padding-right: 14px;
  flex-direction: column;
  padding-bottom: 50px;
  justify-content: center;

  @media (min-width:600px) {
    padding-left: 34px;
    padding-right: 34px;
  }
  h1 {
    margin-bottom: 21px;
  }
  p {
    line-height: 1.5;
  }
`