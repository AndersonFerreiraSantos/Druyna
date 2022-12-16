import React from "react";
import req from '../../../services/request/request'

const Home = () => {
    return(
        <div>
            <h1>HOME</h1>
            <button type = 'button' onClick = {() => {req.POST()}}> cadastro google </button>
        </div>
    )
}
export default Home