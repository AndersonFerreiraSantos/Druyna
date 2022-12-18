import React from "react";
import req from '../../../services/request/request'

import '../css/Home.css'

const Home = () => {
    return(
        <div className = 'Home'>
            <div className = 'body'>
                <button type = 'button' onClick = {() => { 
                    console.log('clear')
                    req.POST('/user/createUser', {email: 'email2@exemple.com', displayName: 'Anderson', password: 'Santer111'})
                }}> cadastro google </button>
            </div>
        </div>
    )
}
export default Home