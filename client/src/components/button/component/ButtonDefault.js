import { Container, Button } from '../css/ButtonDefault'

export const ButtonDefault = ({ onClick, textName, type}) => {
    return (
        <Container>
            <Button onClick={onClick} type ={'submit'}>{textName}</Button>
        </Container>
    )
}