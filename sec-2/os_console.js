const os =require("os")

var freeMem=os.freemem()
var totalMem=os.totalmem()
console.log( //this feature in v8 v9  ec6 and latter than
    `
    free memory :${freeMem}   
    total memory: ${totalMem}
    `
)