import { Container, AllItens, AllPatternsButtons, AllUserButtons , UserButtons, PatternsButton  } from '../css/Header-style'

import METADATA from '../metadata/header-metadata'

import ComponentButtonHeader from '../../../components/button-header/button-header'

const Header = () => {
    return (
        <Container>
            <AllItens>

                <AllPatternsButtons>
                    {METADATA.PATTERN.map((item) => {
                        return (
                            <PatternsButton>
                                <ComponentButtonHeader 
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
                                <ComponentButtonHeader 
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