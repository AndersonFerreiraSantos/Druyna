import styled, {css} from "styled-components";

export const Container = styled.div`
    width: 96px;
    header {
            width: 100px;
            height: 100px;
            background-color: ${(props) => props.color};
        }
    h1 {
        text-align: center 
    }

    ${(props) => props.isDragging && css`
        border: 2px dashed rgb(0, 0, 0, 0.2);
        padding-top: 96px;
        background: transparent;
        box-shadow: none;
        cursor: grabbing;

        header {
            display: none;
        }
    `}
`

