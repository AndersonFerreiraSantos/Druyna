import { Container } from '../css/Field'
import fieldService from '../../../services/fields/fieldService'
import React, { useContext } from 'react';
import context from '../../../app/context/context';

import Slot from '../../slot/component/Slot';

const Field = ({field}) => {
    const { setFields } = useContext(context)
    const {left, bottom, type, characteristic, onClick} = field

    let color = ''
    if(type === "ghost") {
      color = 'rgb(166, 245, 245, 0.3)'
    }else{
      color = 'green'
    }

    function newField(field){
        fieldService.newField(field).then((result) => {
          setFields(result)
        })
      }
    return (
        <Container left = {left} bottom = {bottom} color = {color} onClick = {field.type === 'ghost' ? () => newField(field) : undefined } >
            <>
            {
              field?.slots?.map((item) => {
                return(
                <Slot id = {item.id}/>
                )
              })
         }
         </>
        </Container>
    )
}

export default Field