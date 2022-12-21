//front
import React, { useState} from "react"
import { Container, Window, Title, Center, Google } from '../css/UserLogin'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InputDefault from '../../../components/input/component/InputDefault'
import { ButtonDefault } from "../../../components/button/component/ButtonDefault"

//back
import {GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, User} from 'firebase/auth'
import { auth } from '../../../database/firebase'



const UserLogin = () => {
    const [login, setLogin] = useState({})

    function googleLogin(){
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })
    }

    function startLogin(login){
        signInWithEmailAndPassword(auth, login.email, login.password).then((result) => {
            if(result.operationType){
                toast.success('Logado');
            }
        }).catch((error) => {
            if(error.message == 'Firebase: Error (auth/wrong-password).'){
                toast.error('email or password Invalid');
            }else if(error.message == 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).'){
                toast.error('access to this account has been temporarily disabled due to many failed login attempts');
            }
        })
    }

    return (
        <Container>
            <Window>
                <Title>singin</Title>
                <Center><InputDefault placeholder={'Email'} onChange = {(e) => {setLogin({...login, email: e.target.value})}} /></Center>
                <Center><InputDefault placeholder={'password'} onChange = {(e) => {setLogin({...login, password: e.target.value})}} /></Center>
                <Center><ButtonDefault textName={'confirm'} onClick = {() => {startLogin(login) } }/></Center>

             <ButtonDefault onClick ={()=> {googleLogin()}} textName={'Google'} />

            </Window>

            <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss={false} draggable={false} pauseOnHover={false} theme="dark" />
        </Container>
    )
}

export default UserLogin