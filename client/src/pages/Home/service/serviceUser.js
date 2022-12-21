import REQ from '../../../services/request/request'

const createUser = (sendData) => {
    return new Promise((resolve, reject) => {
        REQ.POST('/user/createConfigUsers', sendData)
    })
}



export default {
    createUser,
}

