const express=require("express")

courses=[
    {id:1,course:"actress"},
    {id:2,course:"musical"},
    {id:3,course:"director"}
]
const app=express()

app.get("/",(req,res)=>{
    res.send("<h1>Scarlett Johansson</h1>")
})

app.get("/app/course/:id",(req,res)=>{
// const course=courses.find(c=>c.id===parseInt(req.params.id) )
const course=courses.find((item)=>{if(item.id==req.params.id){return item}} )
if(!course) res.status(404).send("<h1>bad request</h1>")
res.send(course)

})
const port=process.env.PORT || 3000;//set commend line export PORT=5000; arbitrary port
app.listen(port,()=>{
console.log(`port ${port} is ruining`)

})