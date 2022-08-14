// a object -> hold the eventual result of async operations
console.log("Before")
const p=new Promise((resolve,reject)=>{
    // kick off a  bunch of async task
    myReturn=setTimeout(()=>{
        console.log("data is fetching please wait for this task ..")
        resolve({id:3,name:"scarlett"})//pending ->resolved fulfilled
        console.log("after data...")//pending->rejected
        reject(new Error('message'))
    })
  
}).
then((result)=>{console.log(result)})
.catch((err)=>{console.log(err.message)})
console.log("After")