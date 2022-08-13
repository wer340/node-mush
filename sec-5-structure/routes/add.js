const express=require('express');
const Joi = require('joi');
const router=express.Router()
const actress=[];
router.get("/", (req,res)=>{
    res.send("data") 
    })
    !=
    
    router.post("/",(req,res)=>{//when set app.use("/add",add) another can this page set / as route
        console.log(req.body)
        result=valid(req.body)
       
        if(result.error) {res.status(404).send("<h1>error:"+result.error.details[0].message+"</h1>")}
        else{
        actress.push(req.body)
        console.log(actress)
        res.send("Successful")
        }
    })
// app.patch()
// app.delete()
   
function valid(item){
    const schema=Joi.object({
        name:Joi.string().min(3).required(),
        age:Joi.number().integer().min(14).max(110).required(),
        movie:Joi.string().min(2)
        })
    return schema.validate(item)
}
module.exports=router
