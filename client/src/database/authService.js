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

const logout = async (setIsLogginOut, navigate) => {
    return new Promise((resolve) => {
        setIsLogginOut(true)
            firebaseAuth.signOut(auth)
            setIsLogginOut(false)
            navigate('/')
            window.location.reload();
            resolve()
    })
}

export default {
    getLoggerUser,
    logout
}