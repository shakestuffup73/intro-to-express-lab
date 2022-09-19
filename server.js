// import modules

import express from 'express'
import validator from 'validator'
import { students } from './data/students-data.js'


// create express app

const app = express()

// configure the app (app.set)



// Mount middleware



// Mount routes
app.get('/', function(req, res){
  res.send('<h1>hello, friend</h1>')
})


// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('listening on port 3000')
})