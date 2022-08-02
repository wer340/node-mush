const Joi=require("joi")
const express=require("express")

courses=[
    {id:1,course:"actress"},
    {id:2,course:"musical"},
    {id:3,course:"director"}
]
const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("<h1>Scarlett Johansson</h1>")
})

app.get("/app/course/:id",(req,res)=>{
// const course=courses.find(c=>c.id===parseInt(req.params.id) )
const course=courses.find((item)=>{if(item.id==req.params.id){return item}} )
if(!course) res.status(404).send("<h1>bad request</h1>")
res.send(course)

})
app.post("/app/course/",(req,res)=>{
    let course={
        id:courses.length,
        name:req.body.name
    }
    const Schima=Joi.object({
        name:Joi.string().min(3).required()
    })

    const resultL=Schima.validate(req.body)
    if (resultL.error){
        res.send(resultL.error)
        return;//return the function 

    }
    
        courses.push(course)
        res.send(courses)
    
   
})


const port=process.env.PORT || 3000;//set commend line export PORT=5000; arbitrary port
app.listen(port,()=>{
console.log(`port ${port} is ruining`)

})