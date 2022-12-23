import React, { useEffect, useRef } from 'react';
import { Container, Main, City, Edification} from '../css/Render.js';

import Chat from '../../../../chat/component/Chat'
import FIELDS from './field'

function Render() {

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

  function newField(field, key){
    field.type = 'field'
    field.n = 'new'
    FIELDS.FIELDS[key] = field

    function isEquivalent(a, b) {
      let aProps = Object.getOwnPropertyNames(a);
      let bProps = Object.getOwnPropertyNames(b);

      if (aProps.length !== bProps.length) {
          return false;
      }

      for (let i = 0; i < aProps.length; i++) {
          let propName = aProps[i];

          if (a[propName] !== b[propName]) {
              return false;
          }
      }

      return true;

  }

    let validateLeft = false
    let validateRight = false
    let validateTop = false
    let validateBottom = false

      FIELDS.FIELDS.map((item) => {
        if(((isEquivalent({bottom: item.bottom, left: item.left}, {left: field.left - 200 , bottom: field.bottom}))) === true){ validateLeft = true}
        return validateLeft
      })

      FIELDS.FIELDS.map((item) => {
        if(((isEquivalent({bottom: item.bottom, left: item.left}, {left: field.left + 200,  bottom: field.bottom}))) === true) {validateRight = true}
        return validateRight
      })
      
      FIELDS.FIELDS.map((item) => {
        if(((isEquivalent({bottom: item.bottom, left: item.left}, {left: field.left,  bottom: field.bottom + 200}))) === true) {validateTop = true}
        return validateTop
      })

      FIELDS.FIELDS.map((item) => {
        if(((isEquivalent({bottom: item.bottom, left: item.left}, {left: field.left,  bottom: field.bottom -200}))) === true) {validateTop = true}
        return validateTop
      })
      if(validateLeft === false){FIELDS.FIELDS.push({left: field.left - 200, bottom: field.bottom, characteristic: '', type: 'ghost', config: 'top'})}//left
      if(validateRight === false){FIELDS.FIELDS.push({left: field.left + 200,  bottom: field.bottom, characteristic: '', type: 'ghost', config: 'top'})}//right
      if(validateTop === false){FIELDS.FIELDS.push({left: field.left,  bottom: field.bottom + 200, characteristic: '', type: 'ghost', config: 'top'})}//top
      if(validateBottom === false){FIELDS.FIELDS.push({left: field.left,  bottom: field.bottom -200, characteristic: '', type: 'ghost', config: 'top'})}//bottom

  }

  return (
    <Container>
      <Main ref={containerRef} className="main">
        <City ref={boxRef} className="box">
          {FIELDS.FIELDS.map((field, key) => {

            let color = ''
            if(field.type === 'ghost') {
              color = 'rgb(166, 245, 245, 0.3)'
            }else{
              color = 'green'//
            }

            return( <Edification onClick={field.type === 'ghost' ? () => newField(field, key) : undefined } style ={{backgroundColor: color, marginLeft: field.left, marginBottom: field.bottom}}>{field.characteristic}</Edification> )

          })}
        </City>
        <Chat />
      </Main>
    </Container>
  );
}

export default Render;