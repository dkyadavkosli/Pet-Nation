const mongoose = require('mongoose');

const Favourite = new mongoose.Schema({
    user_id:{
        type:String,
        require:true,
    },
    pet_id:{
        type:String,
        require:true
    },
    pet_name:{
        type:String,
        require:true,
        min:3,
        max:25
    },
    pet_type:{
        type:String,
        require:true
    },
    breed:{ 
        type:String,
        require:true 
    },
    city:{ 
        type:String,
        require:true,
        min:3
    },
    image:{
        type:String,
        require:true,
        min:3
    },
    is_available:{
        type:Boolean,
        require:true,
        min:3
    }
},
{timestamps:true}); 

module.exports = mongoose.model("Favourites",Favourite);