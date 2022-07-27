const emitterEvent=require("events")

class alert extends emitterEvent{

      message(name){
        console.log(name)
       this.emit("red condition",{url:"http://imdb.com"})
    }
    
}



module.exports=alert;