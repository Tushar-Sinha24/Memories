const mongoose = require('mongoose');

const connectToMongo= async ()  => {
    const conn= await mongoose.connect(process.env.MONGO_URI,{
       useNewUrlParser: true,
     useUnifiedTopology: true
    });
    console.log(`Mongo db connected: ${conn.connection.host}`)
 }
 

module.exports =connectToMongo;