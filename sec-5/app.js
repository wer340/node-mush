const Joi=require("joi")
const logger=require("./logger")
const express=require("express")
const { nextTick } = require("process")
const app =express()
app.use(express.json())

app.use(express.urlencoded())//key=value&key=value

app.use((req,res,next)=>{
    console.log("running")
    next()
})
app.use(logger)
actress=[];



app.get("", (req,res)=>{
res.send("data")
})

app.post("/add",(req,res)=>{
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


app.listen(3000,()=>{
    console.log("port 3000 is running")
})