const emitterEvent=require("events")
const alert=require("./correct_eventB")


// alert.event.on("red condition",(args)=>{  //wrong way
//     console.log(args)   
// })

const inf=new alert();
inf.on("red condition",(args)=>{
    console.log(args)   
})
inf.message("scarlet johansson")