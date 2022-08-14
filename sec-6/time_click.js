const {performance} = require('perf_hooks');

var t0=0
const time=new Promise((res,rej)=>{
   
    var setint=setInterval(() => {

     res(console.log("time run ...")  ) 
     var t1=performance.now()
     console.log(t1-t0)
     t0=t1
    } , 290);
}).then(()=>{
   
})

