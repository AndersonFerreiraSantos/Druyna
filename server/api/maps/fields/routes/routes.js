const router = require('express').Router()

const fields = require('../../../maps/fields/controller/fieldsController')

router.post('/new_field', fields.newField )
router.get('/get_fields', fields.getFields )
router.delete('/delete_field', fields.deleteField )
router.put('/update_field', fields.updateField )
router.delete('/delete_all_fields', fields.deleteAllFields )
router.post('/initial_fields', fields.initialFields )

module.exports = router