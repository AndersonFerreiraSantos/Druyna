const crud = require('../../database/crud-firebase')
const collection = 'users'
async function createUser(sendData){
    return new Promise((resolve, reject) => {
        crud.create(collection, sendData.body).then((result) => {
            resolve(result)
        })
    })
}

async function getUid(sendData){
    return new Promise((resolve, reject) => {
        crud.get(collection, sendData.body.id).then((result) => {
            if(result?._fieldsProto?.user?.stringValue){
                const sendData = {
                    user: result._fieldsProto.user.stringValue,
                    email: result._fieldsProto.email.stringValue,
                    name: result._fieldsProto.name.stringValue,
                    password: result._fieldsProto.password.stringValue,
                }
                resolve(sendData)
            }else if(result._serializer.allowUndefined == false){
                
                resolve({error: true, message: 'user not found'})
            }else{
                resolve({error: result, message: 'error fetching uid'})
            }
        })
            
    })
}

async function deleteUid(sendData){
    return new Promise((resolve, reject) => {
        crud.deleteUid(collection, sendData.body.id).then((result) => {
            resolve(result)})
    })
}
exports.createUser = createUser
exports.getUid = getUid
exports.deleteUid = deleteUid
