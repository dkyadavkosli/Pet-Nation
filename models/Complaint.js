const mongoose = require('mongoose');

const Complaint = new mongoose.Schema({
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true, 
    }, 
    username:{
        type:String,
        require:true,
        min:3
    },
    description:{
        type:String,
        require:true,
        min:3
    },
},
{timestamps:true}); 

module.exports = mongoose.model("Complaints",Complaint);