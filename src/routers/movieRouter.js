const express = require('express')
const router = express.Router()
const app = express()

require('dotenv').config()

router.get('/', (req,res)=>{
    res.render('index')
})

router.get('/movies/search', (req,res) => {
    const api_key = process.env.API_KEY
    console.log(api_key);    
    res.render('movie-search', {api_key})
})

router.get('/movies/search/:API_KEY', (req,res) => {
    res.send(req.params.API_KEY)
})

module.exports = router