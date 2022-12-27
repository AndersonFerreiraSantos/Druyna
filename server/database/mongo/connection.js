const { MongoClient } = require('mongodb')
const { exec } = require('node:child_process');

const uri = 'mongodb://localhost:27017/Druyna'

const client = new MongoClient(uri)

async function run (){
    try {
        
        await client.connect()
        console.log('run mongodb')

    }catch(err){
        console.log(err)
    }
}

run()

module.exports = client