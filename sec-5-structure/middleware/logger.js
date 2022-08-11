function log(req,res,next){
console.log("logger is running")

next()
}

module.exports=log

