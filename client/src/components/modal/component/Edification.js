import { Container, Modal, Close} from '../css/Edification'
import { useContext } from 'react'
import { context } from '../../../app/context/context'

const Edification = () => {

    const { modalEdification, statusModal } = useContext(context)

    return(
        <Container display = { modalEdification.status }>
            <Modal>
            <Close onClick={statusModal}>close</Close>

                { modalEdification.component }
            </Modal>
        </Container>
    )
}

export default Edification