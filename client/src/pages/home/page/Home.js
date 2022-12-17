import React from "react";
import req from '../../../services/request/request'

const Home = () => {
    return(
        <div>
            <h1>HOME</h1>
            <button type = 'button' onClick = {() => { 
                console.log('clear')
                req.POST('/user/createUser', {email: 'email2@exemple.com', displayName: 'Anderson', password: 'Santer111'})
            }}> cadastro google </button>
        </div>
    )
}
export default Home