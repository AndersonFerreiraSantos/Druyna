const FCCrud = require('./crud-user')
const router = require('express').Router()


router.post('/createUser', (request, response) => {
    FCCrud.createUser(request.body).then((result) => {
      response.json(result)
  }).catch((error) => {
    response.json(error)
  })
})

router.get('/authenticationUser', (request, response) => {
    FCCrud.authenticationUser(request.body).then((result) => {
      response.json(result)
  }).catch((error) => {
    response.json(error)
  })
})


router.get('/getUid', (request, response) => { 
        return new Promise((resolve, reject) => {
            FCCrud.getUid(request).then((result) => {
                response.json(result)
        })
    })
})

router.delete('/deleteUid', (request, response) => {
        return new Promise((resolve, reject) => {
            FCCrud.deleteUid(request).then((result) => {
                response.json(result)
        })
    })
})

module.exports = router