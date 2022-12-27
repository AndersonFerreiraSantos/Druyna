const router = require('express').Router()

const fields = require('../../../maps/fields/controller/fieldsController')

router.post('/new_field', fields.newField )
router.get('/get_fields', fields.getFields )
router.delete('/delete_field', fields.deleteField )

module.exports = router