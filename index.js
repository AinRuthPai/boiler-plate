const express = require("express");
const app = express();
const port = 5000;


const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://ovadoz:1234@ovadoz.owxis.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});


// const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://ovadoz:1234@ovadoz.owxis.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
//     useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
// }).then(() => console.log("MongoDB Connected...")).catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}`));