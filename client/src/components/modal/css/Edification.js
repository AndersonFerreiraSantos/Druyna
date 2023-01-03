import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;

    display:${(props) => props.display ? 'flex': 'none'};
    flex-direction: row;
    justify-content: center;
    align-items: center;

    z-index: 2;
    
    background-color: rgb(181, 181, 181, 0.8);
`

export const Modal = styled.div`
    width: 800px;
    height: 800px;

    background-color: white;
`

export const Close = styled.button`
    background-color: red;
    padding: 10px;
    position: absolute;
    left: 800px;

`