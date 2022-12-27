import * as firebaseAuth from 'firebase/auth'
import { auth } from './firebase'

const getLoggerUser = async () => {
    return new Promise((resolve) => {
            firebaseAuth.onAuthStateChanged(auth, (user) =>{
                resolve(user)
        })
    })
}

const logout = async (setIsLogginOut, navigate) => {
    return new Promise((resolve) => {
            firebaseAuth.signOut(auth)
            navigate('/')
            window.location.reload();
            resolve()
    })
}

const method = {
    getLoggerUser,
    logout
}

export default method