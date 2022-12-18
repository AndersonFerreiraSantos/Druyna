import styled from 'styled-components'

export const Button = styled.a `
    background: none;
    color: white;
    border: none;
    padding: 0px;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    background-color: yellow;
    height: 30px;
    width: 120px;
    border-radius: 2px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    &:hover {
    background-color: lightblue;
  }
`
  
export const Flat = styled.div `
    background-color: white;
    width: 100%;
    height: 3px;
    margin-top: 5px;
    border-radius: 10px;
`

export const Component = styled.div `
    &:hover {
    background-color: lightblue;
  }
`