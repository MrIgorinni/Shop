import styled from 'styled-components'

export const ProductListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
`

export const EmptyProducts = styled.div`
  border: 2px solid #dbdbdb;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  padding: 120px 50px;
  font-size: 22px;
  border-radius: 7px;
  background: rgba(235, 235, 235, 0.95);
  color: black;

  p {
    text-align: center;
  }
`

export const ProductBox = styled.div<{ $isLoading: boolean }>`
  flex: 0 1 20%;
  display: flex;
  row-gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  min-height: 210px;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.8);
  color: black;
  color: ${({ $isLoading }) => ($isLoading ? 'gray' : 'black')};

  @media (max-width: 400px) {
    min-width: 250px;
  }

  p {
    text-align: center;
  }
`

export const Id = styled.p``

export const Brand = styled.p`
  font-weight: 700;
`

export const Title = styled.p``

export const Price = styled.p`
  width: fit-content;
  padding: 7px;
  border-radius: 7px;
  border: 1px solid gray;
`
