const DB = require('firebase-admin')
const CRUD = require('./crud-user')
const COLLECTION = 'users'

const MESSAGE = require('./metadata/message')

async function createUser(sendData){
    console.log(sendData)
    return new Promise((resolve, reject) => {
        DB.auth().createUser(sendData).then((result) => {
            resolve({message: MESSAGE.SUCCESS.CREATE.SUCCESSFULLY_CREATED, displayName: result.displayName, email: result.email, uid: result.email })
        })
        .catch((error) => {
            console.log(error, MESSAGE.ERROR.CREATE.INVALID_EMAIL)
            error.errorInfo.code == 'auth/invalid-email' ?  
            reject(MESSAGE.ERROR.CREATE.INVALID_EMAIL) : 
            error.errorInfo.code == 'auth/invalid-password'?  
            reject(MESSAGE.ERROR.CREATE.INVALID_PASSWORD) : 
            reject (error.errorInfo)
        });
    })
}

async function getUid(sendData){
    return new Promise((resolve, reject) => {
        CRUD.get(COLLECTION, sendData.body.id).then((result) => {
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
        CRUD.deleteUid(collection, sendData.body.id).then((result) => {
            resolve(result)})
    })
}
exports.createUser = createUser
exports.getUid = getUid
exports.deleteUid = deleteUid
