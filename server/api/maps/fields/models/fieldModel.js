const { ObjectID } = require('bson')
const connection = require('../../../../database/mongo/connection')

class Field {
    constructor(left, bottom, characteristic, type){
        this._characteristic = characteristic,
        this._bottom = bottom,
        this._left = left,
        this._type = type
    }

    async save( left, bottom, characteristic, type ){
        return new Promise((resolve, reject) => {
            const field = connection.db().collection('Fields').insertOne({
                characteristic: characteristic,
                bottom: bottom,
                left: left,
                type: type,
            })
            resolve(field) 
        })

    }

    async get(){
        return new Promise((resolve, reject) => {
            connection.db().collection("Fields").find({}).toArray((error,result) => {
                if(error) reject(error)
                resolve(result)
            })
        })
    }

    async delete(receiveData){
        const {id} = receiveData
        
        return new Promise((resolve, reject) => {
            connection.db().collection("Fields").deleteOne({ _id: ObjectID(id) },(error, result) => {
                if(error) reject(error)
                resolve(result)
            });
        })
    }

    async update(_id, bottom, left, characteristic, type){
        const newValues = { $set: {left: left, bottom: bottom, characteristic: characteristic,type: type } }
        return new Promise((resolve, reject) => {
            connection.db().collection("Fields").updateOne({bottom: bottom, left: left}, newValues, (err, res) => {
                if (err) throw err;
                resolve(res)
              });
        })
    }

    async create(){
        return new Promise((resolve, reject) => {
            const field = connection.db().collection('Fields').insertOne({
                characteristic: this._characteristic ,
                bottom: this._bottom,
                left: this._left,
                type: this._type,
            })
            resolve(field) 
        })

    }
}

module.exports = Field