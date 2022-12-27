const DB = require('firebase-admin')
const CRUD = require('../../../database/firestore/crud')
const COLLECTION = 'Message'

const MESSAGE = require('../metadata/message')

async function getMessage(){
    return new Promise((resolve, reject) => {
        CRUD.getAll(COLLECTION).then((result) => {
            resolve(result)
        })

    })
}

//new Error().stack
exports.getMessage = getMessage

