const emitterEvent=require("events")
const message=require("./error_eventB")


const ev=new emitterEvent()

ev.on("red condition",(args)=>{
    console.log(args) //not call  because  object event are  two obj 
})

message("scarlett")
