import { useState, } from 'react'
import {Container, Close, Items, Div } from '../css/Construction'

import Edification from '../../edification/component/Edification'

import  {EDIFICATION } from '../../../metadata/edifications/navEdification'

const NavConstruction = () => {

    const [close, setClose] = useState(false)

        function closeNav(){
            close === true ? setClose(false) : setClose(true)
        }

    return (
        <Container close = {close}>
            <Close close = {close} onClick={ closeNav} >{close ? '<' : '>'}</Close>
            <Div>
                <Items >
                    {
                        EDIFICATION.PRODUCTION.map((item) => {
                            return(
                                <Edification edification={item} />
                            )
                        })
                    }
                </Items>
            </Div>
        </Container>
    )
}

export default NavConstruction