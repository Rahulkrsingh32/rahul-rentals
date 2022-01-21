const mongoose = require("mongoose");

function connectDB(){
    mongoose.connect('mongodb+srv://Rahulkrsingh32:Rahul123@cluster0.cqvem.mongodb.net/rahul-rental', {useUnifiedTopology: true, useNewUrlParser: true});

    const connection = mongoose.connection
    connection.on('connected' , ()=>{
        console.log('Mongo DB connection successful')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB connection failed')
    })
}

connectDB()

module.exports = mongoose 