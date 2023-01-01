import { useState, } from 'react'
import {Container, Close, Items, Div } from '../css/Nav'

import Edification from '../../../components/edification/component/Edification'

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
                    <Edification id = {'tavern'} />
                    <Edification id = {'bakehouse'} />
                    <Edification id = {'town hall'} />
                </Items>
            </Div>
        </Container>
    )
}

export default Nav