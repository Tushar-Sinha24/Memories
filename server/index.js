const express = require('express');
const connectToMongo = require('./config/db');
const bodyParser = require("body-parser");
const cors = require('cors');
const dotenv= require('dotenv');


//Load env vars
dotenv.config({path:'./config/config.env'})
connectToMongo();

//Routes file
const post=require('./routes/posts')
const auth=require('./routes/auth')

const app =express();
const port = 5000

//body parser
app.use(express.json());

app.use(bodyParser.json({limit: "30mb" , extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb" , extended:true}));
app.subscribe(cors)

//Mount routes
app.use('/api/v1/post',post);
app.use('/api/v1/auth',auth);


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })
