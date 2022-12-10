const express = require('express');
const DB = require('firebase-admin')
function create(receiveData){
    return new Promise((resolve, reject) => {
        resolve(receiveData)
    })
}
function get(){
    return new Promise((resolve, reject) => {
        DB.firestore().collection('users').get().then((snapshot) => {
            const items = snapshot.docs.map(doc =>({
                ...doc.data(),
                uid:doc.id
            }))
            resolve(items)
        })
    })
}
function remove(){
    
}
function put(){
    
}

exports.get = get
