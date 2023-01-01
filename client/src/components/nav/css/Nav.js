import styled from "styled-components";

export const Container = styled.div`
    height: 80%;
    width: 20%;
    background-color: black;
    position: absolute;
    z-index: 1;
    right: ${(props) => props.close ? '-20%' : '0%'};
    transition: 2ms;
    top: 10%;

`

export const Close = styled.div`
position: absolute;
    background-color: red;
    color: white;
    width: 40px;
    height: 30px;
    margin-left: ${(props) => props.close ? '-40px' : '-40px'};
`

export const Items = styled.div`
    background-color: white;
    margin: 4%;
    height: 98%;
    width: 95%;
    margin-left: auto;
    margin-right: auto;

    overflow-y: scroll;

::-webkit-scrollbar {
    width: 0.95rem;
    background: #1e1e24;
}
::-webkit-scrollbar-track {
     background: #1e1e24;
}
::-webkit-scrollbar-thumb {
    background:#555; 
}
::-webkit-scrollbar-thumb:hover {
background: #6649b8;
}
`
export const Div = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

`