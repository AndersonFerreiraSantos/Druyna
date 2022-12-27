const express = require('express');
const cors = require('cors')
const defaultRoutes = require('../routes/defaut-routes')
const mongodb = require('../database/mongo/connection')
const app = express()
const port = 8080

require('dotenv').config()

const SERVICE_ACCOUNT =  require('../database/firestore/service')
const middlewaresPost = require('../src/middlewares/middlewares')
const admin = require('firebase-admin')

admin.initializeApp({
  credential: admin.credential.cert(SERVICE_ACCOUNT)
});

app.use(cors())
app.use(express.json());
app.use(defaultRoutes)

app.use(middlewaresPost.requestDate)

app.listen(port, () => {console.log('run server')})




