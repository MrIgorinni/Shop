import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

export const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  max-width: 500px;
  padding: 10px;
  align-items: center;
  color: rgb(56, 27, 102);
  background: rgba(255, 255, 255, 0.9);
  border-radius: 7px;
  border: 1px solid rgba(139, 140, 141, 0.7);
`

export const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 8px;
  border-radius: 7px;
  background: rgba(0, 0, 0, 0);
  color: black;
  &:hover {
    background: rgba(0, 84, 153, 0.3);
  }

  svg {
    &:hover {
      background: none;
    }
  }

  &:disabled {
    svg {
      fill: #c0c0c0;
    }
  }
`

export const NumberButton = styled.button<{ $isCurrentPage?: boolean }>`
  padding: 10px 15px;
  transition-duration: 300ms;
  font-size: 18px;
  font-weight: 700;
  border-radius: 7px;
  background: ${({ $isCurrentPage }) =>
    $isCurrentPage ? 'rgba(0, 84, 153, 0.192)' : 'rgba(0, 0, 0, 0)'};

  &:hover {
    background: rgba(0, 84, 153, 0.3);
  }
`
