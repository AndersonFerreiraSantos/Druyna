const FCCrud = require('../functions/crud')
const router = require('express').Router()

router.get('/get_message', (request, response) => {
    FCCrud.getMessage().then((result) => {
      response.json(result)
  }).catch((error) => {
    response.json(error)
  })
})

module.exports = router