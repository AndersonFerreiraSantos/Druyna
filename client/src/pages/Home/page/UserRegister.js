import React, {useState} from "react"
import { Container, Window, Title, Center } from '../css/UserRegister'

import InputDefault from '../../../components/input/component/InputDefault'
import { ButtonDefault } from "../../../components/button/component/ButtonDefault"

import REQ from '../../../services/request/request'
const UserRegister = () => {

    const [register, setRegister] = useState({})

    function startRegister(){
        REQ.POST('/user/createUser', register)
    }

    return (
        <Container>
            <Window>
                <Title>register</Title>
                <Center><InputDefault placeholder={'Name'} onChange = {(e) => {setRegister({...register, displayName: e.target.value})}} /></Center>
                <Center><InputDefault placeholder={'Email'} onChange = {(e) => {setRegister({...register, email: e.target.value})}} /></Center>
                <Center><InputDefault placeholder={'password'} onChange = {(e) => {setRegister({...register, password: e.target.value})}} /></Center>
                <Center><ButtonDefault textName={'confirm'} onClick = {() => {startRegister()}}/></Center>
            </Window>
        </Container>
    )
}

export default UserRegister