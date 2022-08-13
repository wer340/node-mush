

getReposiores(4,getCommit)

// most nested  callback   start  more than inside

function handlCommit(commit){
    console.log("handling this commit ....")
}

function getCommit(repo){
    getCommit(repo,handlCommit)
}

/*
define function  vehicle,brand,country
function device(name,(cat)=>{
   4- vehicle(cat,(type)=>{
    3-    brand(type,(brand)=>{
        2-    country(brand,(country)=>{
               1-     console.log("db fetching ...")
            })
        })
    })
})
// Name Function
function getCountry(brand){console.log("db fetching...")}
function getBrand(type){getCountry(brand)}
function getVehicle(cat){getBrand(type)}

function device(name,getVehicle)

*/