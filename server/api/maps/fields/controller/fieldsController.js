const { json } = require('express')
const Field =  require('../models/fieldModel')

const CONFIG = require('../metadata/metadata')
const { compareObjects } = require('../../../../util/util')
const { ObjectID } = require('bson')

module.exports = class FieldController {

    static initialFields(require, response) {
        const { left, bottom, characteristic, type } = require.body
        const field = new Field(left, bottom, characteristic, type)

        field.create().then((result) => {
            response.json(result) 
        })
    }

    static async newField(require, response) {
        const { _id, bottom, left, characteristic, type } = require.body

        const field = new Field()

        field.update(_id, bottom, left, characteristic, 'field', CONFIG.SLOT)

        let fields 

        await field.get().then((result) => {
            fields = result
        })

        let statusLeft = false
        let statusRight = false
        let statusTop = false
        let statusBottom = false

        await validate()

       async function validate(){

            fields.map((item) => {
                compareObjects({bottom: item.bottom, left: item.left}, {left: left - 500, bottom}).then((result) => {
                    if(result === true){ statusLeft = true }
                })
            })

            fields.map((item) => {
                compareObjects({bottom: item.bottom, left: item.left}, {left: left + 500, bottom}).then((result) => {
                    if(result === true){ statusRight = true }
                })
            })

            fields.map((item) => {
                compareObjects({bottom: item.bottom, left: item.left}, {left, bottom: bottom + 500}).then((result) => {
                    if(result === true){ statusTop = true }
                })
            })

            fields.map((item) => {
                compareObjects({bottom: item.bottom, left: item.left}, {left, bottom: bottom - 500}).then((result) => {
                    if(result === true){ statusBottom = true }
                })
            })

        }

        let newFields

        if(statusLeft === false){ await field.save( left -500, bottom, '','ghost' )}//left
        if(statusRight === false){ await field.save( left + 500, bottom, '','ghost' )}//right
        if(statusBottom === false){ await field.save( left, bottom - 500, '','ghost' )}//top
        if(statusTop === false){ await field.save( left, bottom + 500, '','ghost' )}//bottom

        
        await field.get().then((result) => {
            newFields = result
        })
        response.json(newFields)
    }

    static getFields(require, response) {
        const field = new Field()

        field.get().then((result) => {
            response.json(result)
        })
    }

    static deleteField(require, response) {
        const field = new Field()

        field.delete(require.body).then((result) => {
            response.json(result)
        })
    }

    static updateField(require, response) {
        const field = new Field()

        field.update(require.body).then((result) => {
            response.json(result)
        })
    }


    static updateSlot(require, response) {
        const field = new Field()

        field.update(require.body).then((result) => {
            response.json(result)
        })
    }

    static deleteAllFields(require, response) {
        const field = new Field()
        field.get().then((allFields) => {
            let deletedCount = 0
                allFields.map((item) => {
                    field.delete({id:item._id.toString()}).then((result) => {
                        if(deletedCount >= result.lenght){
                            response.json({deletedCount: deletedCount})
                        }
                })
                
            })
        })
    }
}