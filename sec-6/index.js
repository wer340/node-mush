//solution of issue A    cb -> callback 
console.log("Before ")
const user=getUser(3,(list)=>{
    console.log("list fetch ",list)
})
getReposiores(4,(repo)=>{
    console.log("repo" , repo.repo)
})
console.log(user)
console.log("After ")

function getUser(id,cb){
    
    setTimeout(()=>{
        console.log("system is reading database ....")
        cb({id:id ,githubUser:"Scarlett"}) 
    },2000)

}
function getReposiores(id,cb){
    setTimeout(()=>{
        console.log("Api is running ....")
        cb({id:id,nameRepo:"Android Project",repo:["repo1","repo2","repo3"]})
    },2000)
}

//  callback hell  Async
console.log("Before")
getReposiores(4,(repo)=>{
    getCommit(repo,(commit)=>{
        console.log("handling this commit ....")
        //calllback hell
    })
})
console.log("After")
// Sync 
console.log("Before")
const repo=getReposiores(4)
const commit=getCommit(repo[0])
console.log("After")