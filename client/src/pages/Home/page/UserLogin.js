import React from "react"
import { Container } from '../css/UserLogin'

import {GoogleAuthProvider, signInWithPopup, User} from 'firebase/auth'

import { auth } from '../../../database/firebase'

// const [user, setUser] = useState<User>({} as User)

const UserLogin = () => {

    function googleLogin(){
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <Container>
            <button onClick ={()=> {googleLogin()}} >Google</button>
        </Container>
    )
}

export default UserLogin