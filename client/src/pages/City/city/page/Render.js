import React, { useContext, useEffect, useRef, useState } from 'react';
import { Container, Main, City, Edification} from '../css/Render.js';
import { collection, setDoc, doc, query, orderBy} from 'firebase/firestore' //limit
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { databaseApp } from '../../../../database/firebase'

import Chat from '../../../../chat/component/Chat'

import context from '../../../../app/context/context.js';
import fieldsService from '../../../../services/fields/fieldService'

function Render() {
    const {fields, user, setUser} = useContext(context)

    useEffect(() => {
      console.log(fields)

    }, [fields])


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

  function validateField(a, b) {
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

  function newField(field, key){
    console.log(field, key)

    field.type = 'field'
    field.n = 'new'

    let validateLeft = false
    let validateRight = false
    let validateTop = false
    let validateBottom = false

      fields.map((item) => {
        if(((validateField({bottom: item.bottom, left: item.left}, {left: field.left - 200 , bottom: field.bottom}))) === true){ validateLeft = true}
        return validateLeft
      })

      fields.map((item) => {
        if(((validateField({bottom: item.bottom, left: item.left}, {left: field.left + 200,  bottom: field.bottom}))) === true) {validateRight = true}
        return validateRight
      })
      
      fields.map((item) => {
        if(((validateField({bottom: item.bottom, left: item.left}, {left: field.left,  bottom: field.bottom + 200}))) === true) {validateTop = true}
        return validateTop
      })

      fields.map((item) => {
        if(((validateField({bottom: item.bottom, left: item.left}, {left: field.left,  bottom: field.bottom -200}))) === true) {validateBottom = true}////
        return validateBottom
      })

      if(validateLeft === false){fieldsService.newField({left: field.left - 200, bottom: field.bottom, characteristic: '', type: 'ghost', config: 'top'})}//left
      if(validateRight === false){fieldsService.newField({left: field.left + 200,  bottom: field.bottom, characteristic: '', type: 'ghost', config: 'top'})}//right
      if(validateBottom === false){fieldsService.newField({left: field.left,  bottom: field.bottom - 200, characteristic: '', type: 'ghost', config: 'top'})}//top
      if(validateTop === false){fieldsService.newField({left: field.left,  bottom: field.bottom + 200, characteristic: '', type: 'ghost', config: 'top'})}//bottom

      
      console.log(validateLeft, validateRight, validateTop, validateBottom)
  }


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
            return( <Edification onClick={field.type === 'ghost' ? () => newField(field, key) : undefined }  style ={{backgroundColor: color, marginLeft: field.left, marginBottom: field.bottom}}>{field.characteristic}</Edification> )

          })}
        </City>
      </Main>
    </Container>
  );
}

export default Render;