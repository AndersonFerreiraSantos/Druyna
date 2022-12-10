const express = require('express');
const routes = require('./routes/api-router')
const path = require('path')
const app = express()
const port = 8080

//import my middlewares
const middlewaresPost = require('./src/middlewares/middlewares')


app.use(middlewaresPost.requestDate)
app.use(express.json());
app.use(routes)
app.listen(port, () => {})




