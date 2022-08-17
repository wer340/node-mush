const mongoose=require("mongoose");
//address host write in config file in here is talked  mongo db  
mongoose.connect("mongodb://localhost/playground").//automatically playground db is made
then(()=>console.log("connecting mongoose successfully ..."))
.catch((err)=>console.error("error has occurred ... ",err))

const schemaData=new mongoose.Schema({ //! Schema class pascal case no schima
    name:String,
    author:String, //! capital case S
    tags:[ String ],
    date:{type:Date,deafult:Date.now},
    isPublished:Boolean // ! capital case Boolean
});
// *classes object
//human    john

const Data=mongoose.model("actress",schemaData) // *pascal case  for class


async function dataSendToDb(){
    const data=new Data({
        name:"emilia",
        author:"clarcke",
        tags:["actress","movie"],
        isPublished:true
    }
    
    )
    const result=await data.save() // *is synchros  operation 
    console.log(result)
}

dataSendToDb()
