//back
import React, { useState} from "react"
import { Container, Window, Title, Center } from '../css/UserRegister'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InputDefault from '../../../components/input/component/InputDefault'
import { ButtonDefault } from "../../../components/button/component/ButtonDefault"

//back
import FCService from '../service/serviceUser'



import REQ from '../../../services/request/request'
const UserRegister = () => {

    const [register, setRegister] = useState({})

    async function startRegister(){
        REQ.POST('/user/createUser', register).then((result) => {
            FCService.createUser()

            // if(result.success){
            //     toast.success(result.message);
            // }
            // if(result.error){
            //     toast.error(result.message);
            // }
            // if(result.alert){
            //     toast.warning(result.message);
            // }
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
            <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss={false} draggable={false} pauseOnHover={false} theme="dark" />
        </Container>
    )
}

export default UserRegister