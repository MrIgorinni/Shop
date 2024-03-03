import styled from 'styled-components'

export const FilterPanelContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 20px;
  padding: 10px;
  border-radius: 7px;
  background: rgba(159, 178, 199, 0.9);
`

export const Text = styled.p`
  padding-bottom: 4px;
  color: black;
`

export const Select = styled.select`
  padding: 6px;
  font-size: 16px;
  border-radius: 7px;
`

export const InputBox = styled.div`
  input {
    padding: 6px;
    font-size: 16px;
    border-radius: 7px;
  }
`

export const FilterBtn = styled.button`
  margin-left: 15px;
  padding: 5px;
  border-radius: 7px;
  background: inherit;
  color: white;
  border: 2px solid white;

  &:disabled {
    opacity: 0.4;

    &:hover {
      cursor: not-allowed;
    }
  }
`
