import { useState } from 'react'
import { auth, databaseApp} from '../../database/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {Message, OpenMessage, CloseMessage, ViewMessage, Title, } from '../css/chat'

import REQ from '../../services/request/request'
import { collection, orderBy, query } from 'firebase/firestore'

const Chat = () => {

    const [openMessage, setOpenMessage] = useState('')

    const messageRef = collection(databaseApp, 'Message')
    const queryMessages = query(messageRef, orderBy('created'))

    const [messages] = useCollectionData(queryMessages, {idField: 'id'})

    function openClose(){
        if(openMessage === 'none'){
            setOpenMessage('')
        }else{
            setOpenMessage('none')
        }
    }

    function getMessage() {
        REQ.GET('/chat/get_message').then((result) => {
            console.log(result)
        })
    }

    return (
        <>        
            <Message style={{display:openMessage}} >
                <CloseMessage  onClick={() => openClose()} />
                <Title>message</Title>
                <ViewMessage>
                    {messages && messages.map((item, i) => {
                        <p>item</p>
                    })}
                </ViewMessage>

                 </Message>

            {openMessage ==='none' ? <OpenMessage onClick = { () => openClose()} /> : undefined}
        </>
    )
}

export default Chat