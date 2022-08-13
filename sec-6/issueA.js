console.log("Before ")
const user=getUser(3)
console.log(user)
console.log("After ")

function getUser(id){
    setTimeout(()=>{
        console.log("system is reading database ....")
        return {id:id ,githubUser:"Scarlett"}
    },2000)

// return 1
}