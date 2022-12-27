import REQ from '../../../services/request/request'

const createUser = (sendData) => {
    return new Promise((resolve, reject) => {
        REQ.POST('/user/createConfigUsers', sendData).then((result) => {
            resolve(result)
        })
    })
}

const method = {
    createUser,
}

export default method

