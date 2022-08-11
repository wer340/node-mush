const express=require('express')
const router=express.Router()
router.get("/", (req,res)=>{
    res.render("index",{title:"photo",message:"jenifer"})

})

module.exports=router