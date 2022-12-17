const DB = require('firebase-admin')
const CRUD = require('./crud-user')
const COLLECTION = 'users'

const MESSAGE = require('./metadata/user-msg')

async function createUser(sendData){
    console.log(sendData)
    return new Promise((resolve, reject) => {
        DB.auth().createUser(sendData).then((result) => {
            resolve({message: MESSAGE.SUCCESS.create, body: { displayName: result.displayName, email: result.email, uid: result.email }})
        })
        .catch((error) => {
            reject({message: error.message})  
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
