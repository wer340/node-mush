const express=require('express');
const router=express.Router()
const genres=[
{id:1 ,name:"horror"},
{id:2 ,name:"Action"},
{id:3 ,name:"fantasy"},
{id:4 ,name:"romance"},
{id:5 ,name:"biography"},
{id:6 ,name:"dram"},
{id:7 ,name:"documentary"},

];
router.get("/:id", (req,res)=>{
   
 const checkId=genres.find(c=>c.id==parseInt(req.params.id))
 console.log(!checkId)
 try{
    res.send(`
    <h1>id : ${checkId.id}</h1>
    <h1>name : ${checkId.name}</h1>
    
    
    `)
 }
 catch{
    res.send('<h1>This  id  not exist</h1>')
 }
 
})
    
router.post("/",(req,res)=>{//when set app.use("/add",add) another can this page set / as route
    console.log(req.body)
    result=valid(req.body)
    
    if(result.error) {res.status(404).send("<h1>error:"+result.error.details[0].message+"</h1>")}
    else{
    genres.push(req.body)
    console.log(actress)
    res.send("Successful")
    }
})
// app.patch()
// app.delete()
   
function valid(item){
    const schema=Joi.object({
        name:Joi.string().min(3).required()
   
        })
    return schema.validate(item)
}
module.exports=router