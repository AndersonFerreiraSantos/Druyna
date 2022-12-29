import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
`

export const Main = styled.div`
  position: relative;
  border: 10px solid black;
  height: 90%;
  width: 100%;
  overflow: hidden;
`

export const City = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: hotpink;
  height: 500px;
  width: 500px;
  cursor: move; 
  `

export const Edification =  styled.div`
  height: 500px;
  width: 500px;
  top: 0; bottom: 0;
  left: 0; right: 0;
  margin: auto;
  position: absolute;
`