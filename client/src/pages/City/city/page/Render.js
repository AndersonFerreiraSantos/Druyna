import React, { useEffect, useRef } from 'react';
import { Container, Main, City, Edification} from '../css/Render.js';

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

      let nextX = e.clientX - coords.current.startX + coords.current.lastX;
      let nextY = e.clientY - coords.current.startY + coords.current.lastY;
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

  useEffect(() => {
    
  }, [])

  function newField(field, key){
    field.type = 'field'
    field.n = 'new'
    FIELDS.FIELDS[key] = field
    let config

    let positionLeft
    let positionRight
    let positionTop
    let positionBottom

    function isEquivalent(a, b) {
      let aProps = Object.getOwnPropertyNames(a);
      let bProps = Object.getOwnPropertyNames(b);
  
      if (aProps.length != bProps.length) {
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

    if(field.config === 'left' || field.config === 'right') {
      let left = Math.sign( field.left) //lados//
      let bottom = Math.sign( field.bottom) ////


      if(left === -1) {
        positionRight = -200 + field.left
        config = 'left'
      }else{
        positionLeft = 200 + field.left
        config = 'right'
      } 
      positionTop = bottom + 200
      positionBottom = bottom - 200

      //left right 
      FIELDS.FIELDS.push({left: positionLeft ? positionLeft : positionRight, bottom: field.bottom, characteristic: '+', type: 'ghost', config: config})
      //top
      FIELDS.FIELDS.push({left: field.left,  bottom: positionTop, characteristic: '+', type: 'ghost', config: 'top'})
      //bottom
      FIELDS.FIELDS.push({left: field.left,  bottom: positionBottom , characteristic: '+', type: 'ghost', config: 'bootom'})
    }

    if(field.config === 'top' || field.config === 'bottom') {
      let left = Math.sign( field.left) //lados//
      let bottom = Math.sign( field.bottom) //lados

      console.log('>>>',bottom)
      if(bottom === -1) {
        console.log('aaaaaaa', bottom)
        positionBottom = -200 + field.bottom
        config = 'bottom'
      }else{
        console.log('bbbbbbbbb')
        positionTop = 200 + field.bottom
        console.log(positionTop, field.bottom)
        config = 'top'
      } 
      console.log(positionTop)
      console.log(FIELDS.FIELDS)

      let validateTop = false //
      FIELDS.FIELDS.map((item) => {
        if(((isEquivalent({bottom: item.bottom, left: item.left, }, {left: field.left + 200,  bottom: field.bottom}))) === true){validateTop = true}
      })
      let validateBottom =false
      FIELDS.FIELDS.map((item) => {
        if(((isEquivalent({bottom: item.bottom, left: item.left, }, {left: field.left,  bottom: positionTop ? positionTop : positionBottom}))) === true) {validateBottom = true}
      })
      let validateRight = false
      
      FIELDS.FIELDS.map((item) => {
        if(((isEquivalent({bottom: item.bottom, left: item.left, }, {left: field.left - 200 , bottom: field.bottom}))) === true) {validateRight = true}
      })
      console.log(validateTop, validateBottom, validateRight)
      //left right //////
      if(validateRight === false){FIELDS.FIELDS.push({left: field.left - 200 , bottom: field.bottom, characteristic: '+', type: 'ghost', config: config})}
      //top 
      if(validateTop === false){FIELDS.FIELDS.push({left: field.left + 200,  bottom: field.bottom, characteristic: '+', type: 'ghost', config: 'top'})}
      //bottom
      if(validateBottom === false){FIELDS.FIELDS.push({left: field.left,  bottom: positionTop ? positionTop : positionBottom, characteristic: '+', type: 'ghost', config: 'bottom'})}
    }
    
  }
  return (
    <Container>
      <Main ref={containerRef} className="main">
        <City ref={boxRef} className="box">
          <Edification style ={{backgroundColor: 'green'}}>0</Edification>
          {FIELDS.FIELDS.map((field, key) => {

            let color = ''
            if(field.type === 'ghost') {
              color = 'white'
            }else{
              color = 'red'
            }
            return( 
             <Edification onClick={field.type === 'ghost' ? () => newField(field, key) : undefined } style ={{backgroundColor: color, marginLeft: field.left, marginBottom: field.bottom}}>{field.characteristic}</Edification>
            )
          })}
        </City>
        
        
      </Main>
    </Container>
  );
}

export default Render;