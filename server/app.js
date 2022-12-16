const express = require('express');
const defaultRoutes = require('./routes/defaut-routes')
const app = express()
const port = 8080

const admin = require('firebase-admin')

const middlewaresPost = require('./src/middlewares/middlewares')

//database
let serviceAccount = require("./database/serviceAccountKey");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use(middlewaresPost.requestDate)
app.use(express.json());
app.use(defaultRoutes)
//app.use('/user', a)
app.listen(port, () => {})




