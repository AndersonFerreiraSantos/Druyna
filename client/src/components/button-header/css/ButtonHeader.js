import styled from 'styled-components'

export const Button = styled.button `
    background: none;
    color: green;
    border: none;
    padding: 0px;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    
    height: 40px;
    border-radius: 2px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 120px;
    z-index: 1;

    &:hover {
    background-color: lightblue;
    color: blue;
  }
`
