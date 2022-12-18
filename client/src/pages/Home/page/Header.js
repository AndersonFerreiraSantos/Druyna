import { Container, AllItens, AllPatternsButtons, AllUserButtons , UserButtons, PatternsButton  } from '../css/Header'

import METADATA from '../metadata/Header'

import ButtonHeader from '../../../components/button-header/component/ButtonHeader'

const Header = () => {
    return (
        <Container>
            <AllItens>

                <AllPatternsButtons>
                    {METADATA.PATTERN.map((item) => {
                        return (
                            <PatternsButton>
                                <ButtonHeader 
                                textName = {item.textName}
                                onClick={item.onClick} /> 
                            </PatternsButton>
                        )
                    })}
                </AllPatternsButtons>

                <AllUserButtons>
                    {METADATA.USER.map((item) => {
                        return (
                            <UserButtons>
                                <ButtonHeader 
                                textName = {item.textName}
                                onClick={item.onClick} /> 
                            </UserButtons>
                        )
                    })}
                </AllUserButtons>

            </AllItens>
        </Container>
    )
}

export default Header