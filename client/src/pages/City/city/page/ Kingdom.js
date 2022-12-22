import React, { useState } from "react"
import { Container } from '../css/Kingdom'

import authService from "../../../../database/authService"
import { useNavigate } from "react-router-dom"

import Loading from "../../../../components/loadding/component/Loading"

import World from '../../../general/page/World'
import Score from "../../../general/page/Score"
import Continent from "../../../general/page/Continent"
import Clan from "../../../general/page/Clan"
import City from './Render'

const Kingdom = ({internalPage}) => {

    const [isLogginOut, setIsLogginOut] = useState(false)

    const navigate = useNavigate() 

    if(internalPage == 'logout'){
       authService.logout(setIsLogginOut, navigate)
    }
     
    return (
        <>
            <Container>
                {internalPage === 'score' ? <Score /> :
                internalPage === 'clan' ? <Clan />:
                internalPage === 'world' ?  < World />:
                internalPage === 'continent' ?  < Continent />:
                <City />}
            </Container>
            {isLogginOut && <Loading />}
        </>
    )
}

export default Kingdom