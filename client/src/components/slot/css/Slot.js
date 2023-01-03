import styled from "styled-components";

export const Container = styled.div`
    height: 98px;
    width: 98px;
    border: 1px solid black;
    float: left;

    background-color: ${(props) => props.color}
`