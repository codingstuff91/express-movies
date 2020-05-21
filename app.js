require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require ('body-parser')

const axios = require('axios');
const config = require('./config');

const movieRouter = require('./src/routers/movieRouter')
app.use(movieRouter)

const PORT = process.env.PORT || 3000;

app.set('views','./views');
app.set('view engine','ejs');

app.use('/public',express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}))
  
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    console.log('Port', process.env.PORT)
    res.render('index')
})

app.listen(PORT,()=>{
    console.info(`Application fonctionne sur le port ${PORT}`)
})