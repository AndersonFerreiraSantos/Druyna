import {Container} from '../css/City'

import {RECURSOS} from '../../../metadata/infoCity/navInfoCity'
import IconInfoCity from '../../icons/component/infoCity'

const NavCity = () => {
    return(
        <Container>
            {
                RECURSOS.INFO.map((item) => {
                    return(
                        <IconInfoCity text = {item.name}/>
                    )
                })
            }
        </Container>
    )
}

export default NavCity