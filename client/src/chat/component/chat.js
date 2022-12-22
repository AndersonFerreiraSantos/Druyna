import { useState } from 'react'
import { auth, databaseApp} from '../../database/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Client, OpenMessage, CloseMessage, ViewMessage, Title, Message, Image, Text} from '../css/chat'

import { addDoc, collection, limit, orderBy, query, serverTimestamp } from 'firebase/firestore'

const Chat = () => {

    const [openMessage, setOpenMessage] = useState('')

    const messageRef = collection(databaseApp, "Message");

    const queryMessages = query(messageRef, orderBy("createdAt"), limit(25));

    const [messages] = useCollectionData(queryMessages, { idField: "id" }); //aaaaaaaaaa

    const [formValue, setFormValue] = useState('')
    const [user] = useAuthState(auth)

    const sendMessage = async (e) => {
        e.preventDefault()
        const {photoURL, uid} = auth.currentUser
        await addDoc(messageRef, {
            text:  formValue,
            uid,
            photoURL,
            createdAt: serverTimestamp()
        })
    }

    function openClose(){
        if(openMessage === 'none'){
            setOpenMessage('')
        }else{
            setOpenMessage('none')
        }
    }

    return (
        <>        
            <Client style={{display:openMessage}} >
                <CloseMessage  onClick={() => openClose()} />
                <Title>message</Title>
                <ViewMessage>
                    
                    {messages && messages.map((item, i) => {
                        console.log(user.uid, item.uid)
                        let conf = {}
                        if(user.uid === item.uid){ conf.flex = 'row-reverse'; conf.color = 'blue'}
                        return(<Message style = {{flexDirection: conf.flex}}><Image src = {item.photoURL}></Image><Text style = {{backgroundColor: conf.color }}>{item.text} </Text></Message> )
                    })}
                </ViewMessage>
                <form onSubmit={sendMessage}>
                    <input type= 'text' value={formValue} onChange={e => setFormValue(e.target.value)}></input>
                    <button>send</button>
                </form>

                 </Client>

            {openMessage ==='none' ? <OpenMessage onClick = { () => openClose()} /> : undefined}
        </>
    )
}

export default Chat