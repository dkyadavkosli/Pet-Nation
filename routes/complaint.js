const router = require('express').Router();
const Complaint = require("../models/Complaint")


//REGISTER
router.post("/create",async(req,res)=>{
    try{
    //for hashing password 

    const newComplaint = new Complaint({
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address,
        description:req.body.description,
        username:req.body.username,
    })
 
        const complaint = newComplaint.save();
        res.status(200).json(complaint)
    }catch(err){
     res.status(500).json(err)     
    } 
})


module.exports = router 