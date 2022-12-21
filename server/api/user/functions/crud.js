const DB = require('firebase-admin')
const CRUD = require('../../../database/crud-firebase')
const COLLECTION = 'Users'

const MESSAGE = require('../metadata/message')

async function createUser(sendData){
    return new Promise((resolve, reject) => {
        DB.auth().createUser(sendData).then((result) => {
            resolve({...MESSAGE.SUCCESS.CREATE.SUCCESSFULLY_CREATED, displayName: result.displayName, email: result.email, uid: result.uid })
        })
        .catch((error) => {
            error.errorInfo.code == 'auth/invalid-email' ?
            reject(MESSAGE.ERROR.CREATE.INVALID_EMAIL) :
            error.errorInfo.code == 'auth/invalid-password' ?
            reject(MESSAGE.ERROR.CREATE.INVALID_PASSWORD) :
            error.errorInfo.code == 'auth/email-already-exists' ?
            reject(MESSAGE.ERROR.CREATE.EMAIL_EXISTS) :
            reject (error.errorInfo)
        });
    })
}

const createConfigUsers = async (sendData) => {
    return new Promise((resolve) => {
        CRUD.create(COLLECTION, sendData).then((result) => {
            resolve(result)
        })
    })
}

async function authenticationUser(sendData){
    console.log(sendData)
    return new Promise((resolve, reject) => {
        DB.auth().getUserByEmail(sendData)

        //createSessionCookie()
        //generateSignInWithEmailLink()

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

//new Error().stack
exports.createUser = createUser
exports.createConfigUsers = createConfigUsers

exports.authenticationUser = authenticationUser
exports.deleteUid = deleteUid
exports.getUid = getUid

