import styled from "styled-components";

export const Client = styled.div`
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
`

export const Title = styled.p`
    color: blue;
    font-size: 20px;
    margin-left: auto;
    margin-right: auto;
`

export const PersonMessage = styled.p`
    color: orange;
`


export const ViewMessage = styled.div`
    background-color: white;
    width: 380px;
    height: 450px;
    margin: 10px;
    margin-top: 20px;
    flex-direction: column;
    overflow-y: scroll;
    flex-direction: column;

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


export const Message =  styled.div`
    background-color: green;
    margin: 10px;
    display: flex;
    align-items: center;
`

export const Image = styled.img`
    border-radius: 50%;
    width: 30px;
`

export const Text =  styled.p`
    background-color: yellow;
    padding: 5px;
    border-radius: 10px;
`