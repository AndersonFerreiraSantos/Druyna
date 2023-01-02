import React, { useContext, useRef } from 'react'
import { Container } from '../css/Slot'
import { useDrop} from 'react-dnd'
import context from '../../../app/context/context'

import fieldService from '../../../services/fields/fieldService'

const Slot = ({slot, field}) => {
    const {setFields } = useContext(context)
    const ref = useRef()

    function actualizateSlot(field, slot, construction){
        field.slots.map((item) => {
            if(item.id == slot.id){
                item.edification = construction.name
            }
        })
        fieldService.updateSlot({bottom: field.bottom, left: field.left, slots: field.slots}).then((result) => {
            setFields(result)
        })
    }
    
    const [, dropRef] = useDrop({ 
        accept: 'edification',

        drop(item){
            actualizateSlot(field, slot, item)
        }
    })

    dropRef(ref)

    return (
        <Container ref = {ref}>
            {slot.edification}

        </Container>
    )
}

export default Slot