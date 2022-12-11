const express = require('express');
const router = require('express').Router();
const crudUser = require('./crud-user')

router.post('/create', (request, response) => {
    return new Promise((resolve, reject) => {
        crudUser.createUser(request).then((result) => {
            response.json(result)
        })
    })
})

router.get('/getUid', (request, response) => { 
        return new Promise((resolve, reject) => {
            crudUser.getUid(request).then((result) => {
                response.json(result)
        })
    })
})

router.delete('/deleteUid', (request, response) => {
        return new Promise((resolve, reject) => {
            crudUser.deleteUid(request).then((result) => {
                response.json(result)
        })
    })
})
// router.get('/getAll', (request, response) => { 
//     crud.getAll(request.body.collection).then((result) => { response.json(result)})
// })

// router.delete('/', (req, res) => { res.send('delete')})
// router.put('/', (req, res) => { res.send('put')})

module.exports = router