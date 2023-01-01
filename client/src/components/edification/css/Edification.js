import styled, {css} from "styled-components";

export const Container = styled.div`

    header {
            width: 200px;
            height: 100px;
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

