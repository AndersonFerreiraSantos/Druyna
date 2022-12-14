import React, { useState } from "react"
import { Container, AllItens, AllPatternsButtons, AllUserButtons , UserButtons, PatternsButton  } from '../css/Header'

import METADATA from '../metadata/Header'

import ButtonHeader from '../../../components/button/component/ButtonHeader'
import Loading from "../../../components/loadding/component/Loading"

const Header = ({setExternalPage, setInternalPage, user}) => {

    const [isLogginOut] = useState(false)

    return (
            <Container>
                <AllItens>

                    <AllPatternsButtons>
                        { !user ? METADATA.PATTERNOFF.map((item) => {
                            return (
                                <PatternsButton>
                                    <ButtonHeader 
                                    textName = {item.title}
                                    onClick={() =>  setExternalPage(item.onClick) } /> 
                                </PatternsButton>
                            )}) :  
                        METADATA.PATTERNON.map((item) => {
                            return (
                                <PatternsButton>
                                    <ButtonHeader 
                                    textName = {item.title}
                                    onClick={() =>  setInternalPage(item.onClick) } /> 
                                </PatternsButton>
                            )})}
                    </AllPatternsButtons>

                    <AllUserButtons>
                        {!user ? METADATA.USEROFF.map((item) => {
                            return (
                                <UserButtons>
                                    <ButtonHeader 
                                    textName = {item.title}
                                    onClick={() => setExternalPage(item.onClick)} /> 
                                </UserButtons>
                            )}) :  
                        METADATA.USERON.map((item) => {
                            return (
                                <UserButtons>
                                    <ButtonHeader 
                                    textName = {item.title}
                                    onClick={() => setInternalPage(item.onClick)} /> 
                                </UserButtons>
                            )})}
                    </AllUserButtons>

                </AllItens>
            {isLogginOut && <Loading />}

        </Container>
    )
}

export default Header