const router = require('express').Router();
const Pet = require("../models/Pet")


//REGISTER
router.post("/create",async(req,res)=>{
    try{

    const newPet = new Pet({
        name:req.body.name,
        ownerId:req.body.ownerId,
        pet_type:req.body.pet_type,
        breed:req.body.breed,
        color:req.body.color,
        size:req.body.size, 
        city:req.body.city,
        charges:req.body.charges,
        image:req.body.image,
        email:req.body.email,
        phone:req.body.phone, 
        address:req.body.address,
        gender:req.body.gender,
        is_available:req.body.is_available
    }) 
 
        const pet = newPet.save();
        res.status(200).json(pet)
    }catch(err){
     res.status(500).json("error")
    }
})


router.put("/id/:id",async(req,res)=>{
    try{   
        const pet = await Pet.findByIdAndUpdate(req.params.id,{
            $set:req.body, 
        })
        res.status(200).json("Account has been updated")
    }catch(e){
        console.log(e)
    }
}
)  

//getting
router.get("/ownerId/:ownerId",async(req,res)=>{
try{
 const pet = await Pet.findOne({ ownerId: req.params.ownerId }); 
res.status(200).json(pet)
}catch(err){
console.log(err)
}
})


router.get("/all",async(req,res)=>{
    try{
     const pet = await Pet.find({}); 
    res.status(200).json(pet)
    }catch(err){
    console.log(err)
    }
    })

    router.get("/all/free",async(req,res)=>{
        try{
         const pet = await Pet.find({charges : "0"}); 
        res.status(200).json(pet)
        }catch(err){
        console.log(err)
        }
        })

    router.get("/all/:pet_type",async(req,res)=>{
        try{
         const pet = await Pet.find({pet_type : req.params.pet_type}); 
        res.status(200).json(pet)
        }catch(err){
        console.log(err)
        }
        })

    router.get("/owner/:ownerId",async(req,res)=>{
        try{
         const pet = await Pet.find({ownerId:req.params.ownerId}); 
        res.status(200).json(pet)
        }catch(err){
        console.log(err)
        } 
        })

    router.get("/id/:id",async(req,res)=>{
        try{
         const pet = await Pet.findOne({ _id: req.params.id }); 
        res.status(200).json(pet)
        }catch(err){
        console.log(err)
        } 
        })

        router.get("/filters/:city/:breed/:color/:size/:gender",async(req,res)=>{
            try{
             const pet = await Pet.find({city:req.params.city , breed:req.params.breed , color:req.params.color , size:req.params.size , gender:req.params.gender}); 
            res.status(200).json(pet)
            }catch(err){
            console.log(err)
            }
            })

            router.get("/homeSearch/:city/:pet_type",async(req,res)=>{
                try{
                 const pet = await Pet.find({city:req.params.city , pet_type : req.params.pet_type}); 
                res.status(200).json(pet)
                }catch(err){
                console.log(err)
                }
                })

            router.delete("/:_id",async(req,res)=>{ 
                try{
                 const offer = await Pet.findByIdAndDelete( req.params._id );
                res.status(200).json("Deleted")
                }catch(err){
                console.log(err)
                } 
                })


module.exports = router 