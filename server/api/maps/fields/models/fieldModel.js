const connection = require('../../../../database/mongo/connection')

class Field {
    constructor(bottom, left, characteristic, type){
        this._characteristic = characteristic,
        this._bottom = bottom,
        this._left = left,
        this._type = type
    }

    save(){
        return new Promise((resolve, reject) => {
            const field = connection.db().collection('Fields').insertOne({
                characteristic: this._characteristic,
                bottom: this._bottom,
                left: this._left,
                type: this._type
            })
            resolve(field) 
        })

    }

    get(){
        return new Promise((resolve, reject) => {
            connection.db().collection("Fields").find({}).toArray((error,result) => {
                if(error) reject(error)
                resolve(result)
            })
        })
    }

    delete(id){
        return new Promise((resolve, reject) => {
            connection.db().collection("Fields").deleteOne({ id: id },(error, result) => {
                if(error) reject(error)
                resolve(result)
            });
        })
    }
}

module.exports = Field