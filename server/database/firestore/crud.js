const express = require('express');
const DB = require('firebase-admin')

function create(collection, receiveData){
    return new Promise((resolve, reject) => {
        DB.firestore().collection(collection).add(receiveData).then((result) =>{
            resolve(result)
        })
    })
}

function deleteUid(collection, id){
    return new Promise((resolve, reject) => {
        DB.firestore().collection(collection).doc(id).delete().then((result) => {resolve(result)})
    })
}

function get(collection, id){
    return new Promise((resolve, reject) => {
        DB.firestore().collection(collection).doc(id).get().then((result) => {
            resolve(result)
        })
    })
}

function getFilter(collection, column, value){
    return new Promise((resolve, reject) => {
        DB.firestore().collection(collection).doc()
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

function getMessage(collection){
    return new Promise((resolve, reject) => {
        DB.firestore().collection(collection).orderBy('created', 'desc').limit(100)
    })
}


exports.get = get
exports.getAll = getAll
exports.create = create
exports.deleteUid = deleteUid
