import { useState, } from 'react'
import {Container, Close, Items, Div } from '../css/Nav'

import Edification from '../../../components/edification/component/Edification'

import  {EDIFICATION } from '../../../metadata/edifications/metadata'

const Nav = () => {

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
                                <Edification edification={item}/>
                            )
                        })
                    }
                </Items>
            </Div>
        </Container>
    )
}

export default Nav