import React, { useState} from "react"
import { Container, Window, Title, Center } from '../css/UserRegister'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InputDefault from '../../../components/input/component/InputDefault'
import { ButtonDefault } from "../../../components/button/component/ButtonDefault"

import REQ from '../../../services/request/request'
const UserRegister = () => {

    const [register, setRegister] = useState({})

    async function startRegister(){
        REQ.POST('/user/createUser', register).then((response) => {
            console.log(response.message)
            toast('🦄 Wow so easy!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        })
    }

    return (
        <Container>
            <Window>
                <Title>register</Title>
                <Center><InputDefault placeholder={'Name'} onChange = {(e) => {setRegister({...register, displayName: e.target.value})}} /></Center>
                <Center><InputDefault placeholder={'Email'} onChange = {(e) => {setRegister({...register, email: e.target.value})}} /></Center>
                <Center><InputDefault placeholder={'password'} onChange = {(e) => {setRegister({...register, password: e.target.value})}} /></Center>
                <Center><ButtonDefault textName={'confirm'} onClick = {() => {startRegister() } }/></Center>
            </Window>
            <ToastContainer/>
        </Container>
    )
}

export default UserRegister