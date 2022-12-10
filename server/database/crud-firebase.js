const express = require('express');
const DB = require('firebase-admin')



function create(collection, receiveData){
    return new Promise((resolve, reject) => {
        DB.firestore().collection(collection).add(receiveData).then((result) =>{
            resolve(result)
        })
    })
}
function get(collection, id){
    return new Promise((resolve, reject) => {
        console.log(collection, id)
        DB.firestore().collection(collection).doc(id).get().then((result) => {
            console.log(result)
            const sendData = {
                user: result._fieldsProto.user.stringValue,
                email: result._fieldsProto.email.stringValue,
                name: result._fieldsProto.name.stringValue,
                password: result._fieldsProto.password.stringValue,

            }
            console.log(sendData)
            resolve(sendData)
        })
    })
}
function getAll(collection){
    return new Promise((resolve, reject) => {
        DB.firestore().collection(collection).get().then((snapshot) => {
            const items = snapshot.docs.map(doc =>({
                ...doc.data(),
                uid:doc.id
            }))
            resolve(items)
        })
    })
}
function remove(collection, id){
    return new Promise((resolve, reject) => {
        DB.firestore().collection(collection).doc(id).delete().then((result) => {resolve(result)})
    })
}
function put(){
    
}

exports.get = get
exports.getAll = getAll
exports.create = create
exports.remove = remove
