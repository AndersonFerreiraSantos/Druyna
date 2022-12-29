import styled from "styled-components";

export const Container = styled.div`
  height: 500px;
  width: 500px;
  top: 0; bottom: 0;
  left: 0; right: 0;
  margin-left: ${(props) => props.left}px;
  margin-top: ${(props) => props.bottom}px;
  background-color:  ${(props) => props.color};
  position: absolute;
`

export const Slot = styled.div`
    height: 98px;
    width: 98px;
    border: 1px solid black;
    float: left;
`