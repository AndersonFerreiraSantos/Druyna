const routes = require('./routes/api-router')
const admin = require("firebase-admin");
const express = require('express');
const app = express()
const port = 8080

const serviceAccount = require('./database/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  
//import my middlewares
const middlewaresPost = require('./src/middlewares/middlewares')

//use middlewares
app.use(middlewaresPost.requestDate)
app.use(express.json());
app.use(routes)
app.listen(port, () => {})




