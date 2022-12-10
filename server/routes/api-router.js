const router = require('express').Router();
const { response } = require('express');
const crud = require('../database/crud-firebase')

//temp
const User = require('../api/user/user_registration/user-model')
router.post('/', (request, response) => {
    const receiveData = request.body
    const classUser = new User(receiveData.user, receiveData.name, receiveData.password, receiveData.email, request.requestDate)
    response.json(classUser)
})
router.get('/', (request, response) => { 
    crud.get().then((users) => { response.json(users)})
})
router.delete('/', (req, res) => { res.send('delete')})
router.put('/', (req, res) => { res.send('put')})

module.exports = router