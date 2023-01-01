import React, { useRef } from 'react'
import { Container } from '../css/Slot'
import { useDrop} from 'react-dnd'

const Slot = ({slot, field}) => {

    const ref = useRef()

    function actualizateSlot(field, slot, construction){
        field.slots.map((item) => {
            if(item.id == slot.id){
                item.edification = construction.id 
            }
        })
    }
    
    async function startConstruction(edificationId, fieldId) {
    }
    const [, dropRef] = useDrop({ 
        accept: 'edification',

        drop(item){
            actualizateSlot(field, slot, item)
            console.log(item, field, slot)
        }
    })

    dropRef(ref)

    return (
        <Container ref = {ref}>

        </Container>
    )
}

export default Slot