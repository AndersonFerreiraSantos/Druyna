import authService from "../../../database/authService"

const PATTERNOFF = [
    {
        title: 'home', 
        onClick: 'Home'
    },
    {
        title: 'update', 
        onClick: 'Update'
    },
    {
        title: 'news', 
        onClick: 'News'
    },
]

const USEROFF = [
    {
        title: 'register', 
        onClick: 'UserRegister'
    },
    {
        title: 'login', 
        onClick: 'UserLogin'
    },
]

const PATTERNON= [
    {
        title: 'score', 
        onClick: 'score'
    },
    {
        title: 'clan', 
        onClick: 'clan'
    },
    {
        title: 'world', 
        onClick: 'world'
    },
]

const USERON = [
    {
        title: 'continent', 
        onClick: 'continent'
    },
    {
        title: '< logout', 
        onClick: 'logout'
    },
]


export default {
    PATTERNOFF,
    PATTERNON,
    USEROFF,
    USERON,
}



