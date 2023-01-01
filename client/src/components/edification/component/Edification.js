import React, { useRef } from 'react'
import { Container } from '../css/Edification'
import { useDrag } from 'react-dnd'

const Edification = ({color, id}) => {

    const ref = useRef()

    const [{ isDragging }, dragRef] = useDrag({
        item: {type: 'edification', id: id},
        type: 'edification',
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        })
    }) 
    dragRef(ref)

    return (
        <Container isDragging = {isDragging} ref={ref} >
            <header style = {{backgroundColor: color}}>
                
            </header>
        </Container>
    )
}

export default Edification;