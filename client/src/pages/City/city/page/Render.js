import React, { useContext, useEffect, useRef, useState } from 'react';
import { Container, Main, City, Edification} from '../css/Render.js';
import { collection, setDoc, doc, query, orderBy} from 'firebase/firestore' //limit
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { databaseApp } from '../../../../database/firebase'

import Chat from '../../../../chat/component/Chat'

import fieldService from '../../../../services/fields/fieldService'
import context from '../../../../app/context/context.js';

function Render() {
    const {setFields, fields, user, setUser} = useContext(context)

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



  function newField(field){
    console.log(field)
    fieldService.newField(field).then((result) => {
      console.log(result)
    })
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
            return( <Edification onClick={field.type === 'ghost' ? () => newField(field) : undefined }  style ={{backgroundColor: color, marginLeft: field.left, marginBottom: field.bottom}}>{field.characteristic}</Edification> )

          })}
        </City>
      </Main>
    </Container>
  );
}

export default Render;