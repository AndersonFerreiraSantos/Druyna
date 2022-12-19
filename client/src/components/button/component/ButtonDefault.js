import { Container, Button } from '../css/ButtonDefault'

export const ButtonDefault = ({ onClick, textName }) => {
    return (
        <Container>
            <Button onClick={onClick} >{textName}</Button>
        </Container>
    )
}