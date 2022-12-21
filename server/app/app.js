const express = require('express');
const cors = require('cors')
const defaultRoutes = require('../routes/defaut-routes')
const app = express()
const port = 8080

const admin = require('firebase-admin')

const middlewaresPost = require('../src/middlewares/middlewares')

let serviceAccount = require("../database/service-account-key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
app.use(cors())
app.use(express.json());
app.use(defaultRoutes)

app.use(middlewaresPost.requestDate)

app.listen(port, () => {})




