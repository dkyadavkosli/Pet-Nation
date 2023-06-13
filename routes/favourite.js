const router = require('express').Router();
const Favourite = require("../models/Favourite")


//REGISTER
router.post("/create",async(req,res)=>{
    try{

    const newPet = new Favourite({
        user_id:req.body.user_id,
        pet_id:req.body.pet_id,
        breed:req.body.breed,
        pet_name:req.body.pet_name, 
        city:req.body.city,
        image:req.body.image,
        is_available:req.body.is_available
    }) 
 
        const pet = newPet.save();
        res.status(200).json(pet)
    }catch(err){
     res.status(500).json("error")
    }
})

router.get("/user/:user_id",async(req,res)=>{
    try{
     const pet = await Favourite.find({user_id:req.params.user_id}); 
    res.status(200).json(pet)
    }catch(err){
    console.log(err)
    }
    }) 

    router.delete("/:_id",async(req,res)=>{ 
        try{
         const offer = await Favourite.deleteOne( {pet_id : req.params._id} );
        res.status(200).json("Deleted")
        }catch(err){
        console.log(err)
        } 
        })


module.exports = router 