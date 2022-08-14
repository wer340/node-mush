function device(name){
  return new Promise((res,rej)=>{
    setTimeout (()=>{
       res({name:name ,cat:["car","truck","bus","airplane"]})
    },3000)

  })
 
}
function brand(cat){
    return new Promise((res,rej)=>{
        setTimeout (()=>{
            res({cat:cat,brand:["benz","fiat","pegot","ford","landrover"]})
         },5000) 
    })
}
function country(brand){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res({brand:brand ,country:["germany","italy","france","the usa","the uk"]})
        },1000)
    })
}

device("car")
.then(cat=>brand(cat["cat"][0]))
.then(brand=>country(brand["brand"][1]))
.then((country_name=>console.log(country_name["country"][1])))