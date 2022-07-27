const emitterEvent=require("events")

const event=new emitterEvent()

function message(name){
    console.log(name)
   event.emit("red condition",{url:"http://imdb.com"})
}



module.exports=message;