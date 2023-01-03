import React, { useContext, useRef } from 'react'
import { Container } from '../css/Slot'
import { useDrop} from 'react-dnd'
import {context} from '../../../app/context/context'

import fieldService from '../../../services/fields/fieldService'

import Tavern from '../../../pages/City/edifications/tavern/component/Tavern'
const Slot = ({slot, field}) => {
    const { setFields, statusModal } = useContext(context)
    const ref = useRef()

    function actualizateSlot(field, slot, construction){
        field.slots.map((item) => {
            if(item.id == slot.id){
                item.edification = construction.name
                item.color = construction.color
            }
        })
        fieldService.updateSlot({bottom: field.bottom, left: field.left, slots: field.slots}).then((result) => {
            setFields(result)
        })
    }

    function aaa(){
        statusModal(<Tavern />)
    }
    
    const [, dropRef] = useDrop({ 
        accept: 'edification',

        drop(item){
            actualizateSlot(field, slot, item)
        }
    })

    dropRef(ref)
    return (
        <Container ref = {ref} color = {slot.color} onClick= {aaa}>
            {<h1>{slot.edification} </h1>}
        </Container>
    )
}

export default Slot