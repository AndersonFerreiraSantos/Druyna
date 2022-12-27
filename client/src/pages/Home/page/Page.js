import { Container } from '../css/Page'

import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";

import News from "./News";
import Home from "./Home";
import Update from "./Update";

const Page = ({externalPage}) => {
    return(
        <Container>
            {externalPage === 'UserRegister' ? <UserRegister /> :
             externalPage === 'UserLogin' ? <UserLogin /> :

             externalPage === 'News' ? <News /> :
             externalPage === 'Home' ? <Home /> :
             externalPage === 'Update' ? <Update /> :
            <Home />}
        </Container>
    )
}

export default Page