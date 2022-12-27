const Field =  require('../models/fieldModel')

module.exports = class FieldController {


    static newField(require, response) {
        const { bottom, left, characteristic, type } = require.body

        const field = new Field(bottom, left, characteristic, type)

        field.save().then((result) => {
            response.json(result)
        })
    }

    static getFields(require, response) {
        const field = new Field()

        field.get().then((result) => {
            response.json(result)
        })
    }

    static deleteField(require, response) {
        const { id } = require.body

        const field = new Field()

        field.delete(id).then((result) => {
            response.json(result)
        })
    }
}