const eventEmitter=require("events")

// event is class

const emitter=new eventEmitter();
//making noise  and produce signaling 

emitter.on("you listen my noise ?!",()=>{ //first arg name event second callback
 console.log(" i listen your noise  shout up please")   

})
emitter.emit("you listen my noise ?!")

emitter.on("wanna site",(arg)=>{
    console.log(arg.url)
})

emitter.emit("wanna site",{id:3 ,url:"imdb.com"}) //this technic passed data   EC6  and latter version   arrow function