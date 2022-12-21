import * as firebaseAuth from 'firebase/auth'
import { resolvePath } from 'react-router-dom'
import { auth } from './firebase'

const getLoggerUser = async () => {
    return new Promise((resolve) => {
        firebaseAuth.onAuthStateChanged(auth, (user) =>{
            console.log(user)
            resolve(user)
    })
    })
}

export default {
    getLoggerUser
}