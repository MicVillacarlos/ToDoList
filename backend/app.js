const express = require ('express');
const app = express();
const cors = require('cors')

const mongoose = require('mongoose')
require('dotenv/config')

const tasks = require('./Routes/tasks');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

mongoose.connect(process.env.DATABASE_URI,{ useNewUrlParser:true });
mongoose.connection.on('connected',()=>{
    console.log('Connected to DB')
})

app.use(cors())
app.use(tasks)

app.listen(4000,()=>{
    console.log('server is running port 4000')
})
console.log(mongoose.connection.readyState) 

