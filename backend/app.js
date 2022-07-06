

const express = require('express');
  const errorMiddlware = require('./middleware/error');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRoute = require('./routes/studentRoute');

app.use(express.json())

app.use(cors())

 app.use(bodyParser.urlencoded({ extended: true }))

 app.use(bodyParser.json())

//Routes imports

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.use('/api/v1', studentRoute);

//Middleware for Errors
app.use(errorMiddlware)

module.exports = app;