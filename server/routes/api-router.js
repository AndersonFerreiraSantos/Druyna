const router = require('express').Router();

//temp
const user = require('../api/user/user-registration/class-user')



router.post('/', (req, res) => {
    const receiveData = req.body
    const classUser = new user(receiveData.user, receiveData.name, receiveData.password, receiveData.email, req.requestDate)
    res.json(classUser)
})
router.get('/', (req, res) => { res.send('get')})
router.delete('/', (req, res) => { res.send('delete')})
router.put('/', (req, res) => { res.send('put')})

module.exports = router