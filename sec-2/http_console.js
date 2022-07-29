const http =require("http")

const server=http.createServer((req,res)=>{
if(req.url=="/"){
    res.write("<h1>my site </h1>");
    res.end()
}
if(req.url=="/api/"){
    res.write("<h1> my Api service </h1>")
    res.end()
}
})

server.on('connection',(socket)=>{
    console.log("new connection")
})


server.listen(3000,()=>{
console.log("port 300 is runing ...")
})