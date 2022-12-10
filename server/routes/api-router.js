const router = require('express').Router();
const { response } = require('express');
const crud = require('../database/crud-firebase')

//temp
const User = require('../api/user/user_registration/user-model')

router.post('/create', (request, response) => {
    crud.create('bakehouse', request.body).then((result) => {response.json(result)})
})
router.get('/get', (request, response) => { 
    crud.get(request.body.collection, request.body.id ).then((result) => { response.json(result)})
})
router.get('/getAll', (request, response) => { 
    crud.getAll(request.body.collection).then((result) => { response.json(result)})
})
router.post('/remove', (request, response) => {
    crud.remove(request.body.collection, request.body.id).then((result) => {response.json(result)})
})
router.delete('/', (req, res) => { res.send('delete')})
router.put('/', (req, res) => { res.send('put')})

module.exports = router

    // const receiveData = request.body
    // const classUser = new User(receiveData.user, receiveData.name, receiveData.password, receiveData.email, request.requestDate)
    // response.json(classUser)