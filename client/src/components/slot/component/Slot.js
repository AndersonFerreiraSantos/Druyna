import React, { useRef } from 'react'
import { Container } from '../css/Slot'
import { useDrop} from 'react-dnd'

const Slot = ({id}) => {

    const ref = useRef()
    async function startConstruction(edificationId, fieldId) {
        console.log(edificationId, fieldId)
    }
    const [, dropRef] = useDrop({ 
        accept: 'edification',

        drop(item){
            console.log('drop: ', item, 'id: ',id)
        }
    })

    dropRef(ref)

    return (
        <Container ref = {ref}>

        </Container>
    )
}

export default Slot