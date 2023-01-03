import React, { useRef } from 'react'
import { Container } from '../css/Edification'
import { useDrag } from 'react-dnd'

const Edification = ({edification}) => {

    const ref = useRef()

    const [{ isDragging }, dragRef] = useDrag({
        item: edification,
        type: 'edification',
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        })
    }) 
    dragRef(ref)

    return (
        <Container isDragging = {isDragging} ref={ref} color = {edification.color}>
            <header > 
                <h1>{edification.name}</h1>
            </header>
        </Container>
    )
}

export default Edification;