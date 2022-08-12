//notice set export before use  export app_pass=123 and export DEBUG=APP:*
const Joi=require("joi")
const pug =require("pug")
const morgan=require("morgan")
const helmet=require("helmet")
const config=require("config")
const add=require("./routes/add")
const pic=require("./routes/pic")
const genres=require("./routes/genres")
const logger=require("./middleware/logger")
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

if(app.get('env')=="development"){
   
    app.use(morgan("tiny"))
   
}
//  pip api route to entry point
app.use('/add',add)
app.use('/pic',pic)
app.use('/genres',genres)

// configuration
console.log(`my name app is : ${config.get('name')}`)
console.log(`my email server app is : ${config.get('mail.host')}`)

//set view engine
app.set('view engine','pug')
app.set('views','./views')
//  port
app.listen(3000,()=>{
    console.log("port 3000 is running")
})