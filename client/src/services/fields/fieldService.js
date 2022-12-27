import REQ from '../request/request'

const getFields = () => {
    return new Promise((resolve) => {
        REQ.GET('/field/get_fields', {}).then((result) => {
            resolve(result)
        })
    })
}

const newField = (sednData) => {
    return new Promise((resolve) => {
        REQ.POST('/field/new_field', sednData).then((result) => {
            resolve(result)
        })
    })
}

const updateField = (sendData) => {
    return new Promise((resolve) => {
        REQ.POST('/user/update_field', sendData).then((result) => {
            resolve(result)
        })
    })
}

const method = {
    getFields,
    newField
}

export default method

