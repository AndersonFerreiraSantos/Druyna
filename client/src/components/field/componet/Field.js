import { Container, Slot } from '../css/Field'
import fieldService from '../../../services/fields/fieldService'
import React, { useContext } from 'react';
import context from '../../../app/context/context';

const Field = ({field}) => {
    const { setFields } = useContext(context)
    const {left, bottom, type, characteristic, onClick} = field

    let color = ''
    if(type === "ghost") {
      color = 'rgb(166, 245, 245, 0.3)'
    }else{
        console.log(type)
      color = 'green'
    }

    function newField(field){
        fieldService.newField(field).then((result) => {
          setFields(result)
        })
      }
    console.log(left, bottom, type, characteristic )
    return (
        <Container left = {left} bottom = {bottom} color = {color} onClick = {field.type === 'ghost' ? () => newField(field) : undefined } >
            {type === 'field' ?    
           <>
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot /> 
           </>
         : undefined}
        </Container>
    )
}

export default Field