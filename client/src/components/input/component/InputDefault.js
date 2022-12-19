import { Container, Input }  from '../css/InputDefault'

const InputDefault = ({placeholder, onChange}) => {
    return (
        <Container>
            <Input placeholder={placeholder} onChange = {onChange} />
        </Container>
    )
}

export default InputDefault