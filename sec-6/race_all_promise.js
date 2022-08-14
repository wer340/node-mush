
const device=new Promise((res,rej)=>{
setTimeout (()=>{
    console.log("device")
res({name:"name" ,cat:["car","truck","bus","airplane"]})
},1000)

})
   

const brand=new Promise((res,rej)=>{
setTimeout (()=>{
    console.log("brand")
res({cat:"cat",brand:["benz","fiat","pegot","ford","landrover"]})
},1000) 
})

const country=new Promise((res,rej)=>{
setTimeout(()=>{
    console.log("country")
res({brand:"brand" ,country:["germany","italy","france","the usa","the uk"]})
},1000)
})
Promise.all([device,country]).
then((result)=>{console.log("All answer : ",result,"\n%%%%%%%%%%%%%%%")})
  
Promise.race([device,country]).
then((result)=>{console.log("\n***********************************************\n","RAce Answer :\n ",result,result,"\n***********************************************")})

