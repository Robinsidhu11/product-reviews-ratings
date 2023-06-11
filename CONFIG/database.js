const mongoose=require('mongoose')
require('dotenv').config()
const dbconnectFN= ()=>{
    mongoose.connect(`${process.env.DATABASE_URL}/Products`,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>console.log("db connected")).catch((err)=>console.log("db not connected"))
}
module.exports=dbconnectFN