import React from "react";
import req from '../../../services/request/request'
import { Container, Body } from '../css/Home-style'

const Home = () => {
    return(
        <Container>
            <Body>
                <button type = 'button' onClick = {() => { 
                    console.log('clear')
                    req.POST('/user/createUser', {email: 'email2@exemple.com', displayName: 'Anderson', password: 'Santer111'})
                }}> cadastro google </button>
            </Body>
        </Container>
    )
}
export default Home