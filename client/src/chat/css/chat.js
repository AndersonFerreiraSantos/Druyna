import styled from "styled-components";

export const Message = styled.div`
text-align: center;
    background-color: black;
    width: 400px;
    height: 500px;
    position: fixed;
    bottom: 5%;
    right: 0;
    align-items: center;
`

export const OpenMessage = styled.div`
    bottom: 5%;
    right: 0;
    position: fixed;
    background-color: green;
    width: 50px;
    height: 30px;
    z-index: 1;
`

export const CloseMessage = styled.div`
    position: absolute;
    bottom: 94%;
    left: 89%;
    background-color: red;
    width: 50px;
    height: 30px;
    z-index: 1;
`

export const ViewMessage = styled.div`
    background-color: white;
    width: 380px;
    height: 450px;
    align-items: center;
    margin: 10px;
    margin-top: 20px;
`

export const Title = styled.p`
    color: blue;
    z-index: 1;
    font-size: 20px;
    margin-left: auto;
    margin-right: auto;
`

export const PersonMessage = styled.p`
    color: orange;
`