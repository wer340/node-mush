const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/playground").//automatically playground db is made
then(()=>console.log("connecting mongoose successfully ..."))
.catch((err)=>console.error("error has occurred ... ",err))