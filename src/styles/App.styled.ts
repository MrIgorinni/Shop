import styled from 'styled-components'

export const Container = styled.div`
  padding: 30px 100px;

  @media (max-width: 950px) {
    padding: 30px;
  }
`

export const ErrorPopup = styled.div`
  position: fixed;
  z-index: 99;
  top: 10px;
  right: 10px;
  max-width: 400px;
  max-height: 65px;
  overflow: hidden;
  padding: 5px 10px;
  word-wrap: break-word;
  background: red;
  border-radius: 7px;
`
