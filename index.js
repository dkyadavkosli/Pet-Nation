const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const entryRoute = require('./routes/entry');
const petRoute = require('./routes/pet');
const favouriteRoute = require('./routes/favourite');
const complaintRoute = require('./routes/complaint');

dotenv.config();

const DB = process.env.MONGO_URL;

const PORT = 5000;

mongoose.connect(DB).then(()=>{
    console.log("Success")
}).catch((err)=>{
    console.log("Error")
});

app.use(express.json());

app.use("/api/entry" , entryRoute) 
app.use("/api/pet" , petRoute)
app.use("/api/complaint" , complaintRoute)
app.use("/api/favourite" , favouriteRoute);

if(process.env.NODE_ENV=='production'){
    const path = require('path')

    app.get('/',(req,res)=>{
        app.use(express.static(path.resolve(__dirname,'client','build')))
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}


app.listen(PORT,()=>{
    console.log("Backend is running")
})

