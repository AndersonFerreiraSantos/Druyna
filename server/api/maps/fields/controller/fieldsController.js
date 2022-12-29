const { json } = require('express')
const Field =  require('../models/fieldModel')

const { compareObjects } = require('../../../../util/util')

module.exports = class FieldController {

    // static newField(require, response) {
    //     const { bottom, left, characteristic, type } = require.body
    //     const field = new Field(bottom, left, characteristic, type)

    //     field.save()
    // }

    static async newField(require, response) {
        const { bottom, left, characteristic, type } = require.body

        console.log(bottom, left,)

        const field = new Field()

        let fields 

        await field.get().then((result) => {
            fields = result
        })

        console.log(fields)

        let statusLeft = false

        await validateLeft()

            async function validateLeft(){
            fields.map((item) => {
                console.log({left: item.left, bottom: item.bottom, }, {left: left, bottom: bottom})
                compareObjects({bottom: item.bottom, left: item.left}, {left: left, bottom: bottom}).then((result) => {
                    if(result === true){statusLeft = true}
                })
            })
        }

            console.log(statusLeft)

        //     let validateRight = false
        //     let validateTop = false
        //     let validateBottom = false
    
        //   fields.map((item) => {
        //     if(((compareObjects({bottom: item.bottom, left: item.left}, {left: left + 200,  bottom: bottom}))) === true) {validateRight = true}
        //     return validateRight
        //   })
          
        //   fields.map((item) => {
        //     if(((compareObjects({bottom: item.bottom, left: item.left}, {left: left,  bottom: bottom + 200}))) === true) {validateTop = true}
        //     return validateTop
        //   })
    
        //   fields.map((item) => {
        //     if(((compareObjects({bottom: item.bottom, left: item.left}, {left: left,  bottom: bottom -200}))) === true) {validateBottom = true}
        //     return validateBottom
        //   })
    
            // if(validateLeft === false){field.save( left - 200,bottom, '','ghost').then((result) => { console.log(result)})}//left
            // if(validateRight === false){field.save( left + 200, bottom, '','ghost').then((result) => { console.log(result)})}//right
            // if(validateBottom === false){field.save( left, bottom - 200, '','ghost').then((result) => { console.log(result)})}//top
            // if(validateTop === false){field.save( left, bottom + 200, '','ghost').then((result) => { console.log(result)})}//bottom


    }

    static getFields(require, response) {
        const field = new Field()

        field.get().then((result) => {
            response.json(result)
        })
    }

    static deleteField(require, response) {
        const field = new Field()

        console.log(require)

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

    static deleteAllFields(require, response) {
        const field = new Field()
        field.get().then((allFields) => {
            let deletedCount = 0
                allFields.map((item) => {
                    field.delete({id:item._id.toString()}).then((result) => {
                        console.log(deletedCount, allFields.lenght)
                        if(deletedCount >= result.lenght){
                            response.json({deletedCount: deletedCount})
                        }
                })
                
            })



            // result.map((item) => {
            //     console.log({id:item._id.toString()})
            //     field.delete('63ab64b364ddfb8fd99c7395').then((result) => {

            //         console.log(result)

            //     })
            // })
        })
    }
}