const { ObjectID } = require('bson')
const connection = require('../../../../database/mongo/connection')

class Field {
    constructor(bottom, left, characteristic, type){
        this._characteristic = characteristic,
        this._bottom = bottom,
        this._left = left,
        this._type = type
    }

    async save( bottom, left, characteristic, type ){
        return new Promise((resolve, reject) => {
            const field = connection.db().collection('Fields').insertOne({
                characteristic: characteristic ? characteristic : this._characteristic,
                bottom: bottom ? bottom : this._bottom,
                left: left ? left : this._left,
                type: type ? type : this._type
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

    delete(receiveData){
        const {id} = receiveData
        
        return new Promise((resolve, reject) => {
            connection.db().collection("Fields").deleteOne({ _id: ObjectID(id) },(error, result) => {
                if(error) reject(error)
                resolve(result)
            });
        })
    }

    update(receiveData){
        const { id, left, bottom, characteristic, type } = (receiveData)

        console.log(id, left, bottom, characteristic, type )

        const newValues = { $set: {left: left, bottom: bottom, characteristic: characteristic, type: type } }
        return new Promise((resolve, reject) => {
            connection.db().collection("Fields").updateOne({id:id, bottom: bottom, left: left}, newValues, (err, res) => {
                if (err) throw err;
                resolve(res)
              });
        })
    }
}

module.exports = Field