import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  div {
    padding-bottom: 30px;
  }

  h1 {
    padding: 5px 50px;
    position: relative;
    font-size: 52px;
    font-weight: 700;
    background: #9fb2c7;
    border-radius: 3px;
  }

  h1:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    left: 0;
    bottom: -15px;
    background: #9fb2c7;
  }

  h1:after {
    content: '';
    position: absolute;
    height: 0;
    width: 80%;
    border-top: 10px solid #9fb2c7;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    left: 50%;
    transform: translateX(-50%);
    bottom: -25px;
  }
`
