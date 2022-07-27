const fs =require("fs")

var fileS=fs.readdirSync("./") //give path
console.log(fileS)
var fileA=fs.readdir(".0/",(err,file)=>{//first arg give path second arg 
if (err)  console.log("error",err)
else {console.log("result",file)}


}) 
