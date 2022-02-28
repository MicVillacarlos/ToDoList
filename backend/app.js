const express = require ('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')

const tasks = require('./Routes/tasks');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

mongoose.connect(process.env.DATABASE_URI,{ useNewUrlParser:true },()=>{
    console.log("connected to db")
})

app.use(tasks)

app.listen(4000,()=>{
    console.log('server is running port 4000')
})
console.log(mongoose.connection.readyState) 

