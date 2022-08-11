//notice set export before use  export app_pass=123 and export DEBUG=APP:*
const Joi=require("joi")
const dbDebugger=require("debug")("app:db")
const startupDebugger=require("debug")("app:startup")
const morgan=require("morgan")
const helmet=require("helmet")
const config=require("config")
const logger=require("./logger")
const express=require("express")
const bodyParser=require("body-parser")
const app =express()
//bodyparser~express
app.use(express.urlencoded({extended:true}))//key=value&key=value
app.use(express.json())
// app.use((req,res,next)=>{
//     console.log("running")
//     next()
// })
// app.use(logger)

app.use(express.static("public"))
app.use(helmet())

startupDebugger(`NODE_ENV : ${process.env.NODE_ENV}`)
startupDebugger(`app get : ${app.get('env')}`)


if(app.get('env')=="development"){
   
    app.use(morgan("tiny"))
    startupDebugger("morgan enabled ...")
}

// configuration

console.log(`my name app is : ${config.get('name')}`)
console.log(`my email server app is : ${config.get('mail.host')}`)
console.log(`my email server pass : ${config.get('mail.pass')}`)


actress=[];



app.get("", (req,res)=>{
res.send("data")
})

app.post("/add",(req,res)=>{
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


app.listen(3000,()=>{
    dbDebugger("port 3000 is running")
})