const crud = require('./crud-user')
const router = require('express').Router()
router.get('/authGoogle', (request, response) => {
    return new Promise((resolve, reject) => {
        authGoogle.authGoogle()
    })
} )

router.post('/create', (request, response) => {
    return new Promise((resolve, reject) => {
        crud.createUser(request).then((result) => {
            response.json(result)
        })
    })
})

router.get('/getUid', (request, response) => { 
        return new Promise((resolve, reject) => {
            crud.getUid(request).then((result) => {
                response.json(result)
        })
    })
})

router.delete('/deleteUid', (request, response) => {
        return new Promise((resolve, reject) => {
            crud.deleteUid(request).then((result) => {
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