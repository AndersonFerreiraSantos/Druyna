import React, { useContext, useEffect, useRef } from 'react';
import { Container, Main, City } from '../css/Render.js';

import fieldService from '../../../../services/fields/fieldService'
import context from '../../../../app/context/context.js';

import Field from '../../../../components/field/componet/Field.js';

function Render() {
    const { fields } = useContext(context)

  const containerRef = useRef(null);
  const boxRef = useRef(null);
  const isClicked = useRef(false);

  const coords = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0
  })

  useEffect(() => {

    if (!boxRef.current || !containerRef.current) return;

    const box = boxRef.current;
    const container = containerRef.current;

    const onMouseDown = (e) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    }

    const onMouseUp = (e) => {
      isClicked.current = false;
      coords.current.lastX = box.offsetLeft;
      coords.current.lastY = box.offsetTop;
    }

    const onMouseMove = (e) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;
      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    }

    box.addEventListener('mousedown', onMouseDown);
    box.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseUp);

    const cleanup = () => {
      box.removeEventListener('mousedown', onMouseDown);
      box.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseUp);
    }

    return cleanup;
  }, [])



  return (
    <Container>
      <Main ref={containerRef} className="main">
        <City ref={boxRef} className="box">
            
            {fields && fields.map((field, key)=>{

            let color = ''
            if(field.type === 'ghost') {
              color = 'rgb(166, 245, 245, 0.3)'
            }else{
              color = 'green'
            }
            return( <Field field = {field} >{field.characteristic}</Field> )

          })}
        </City>
      </Main>
    </Container>
  );
}

export default Render;