const mongoose=require('mongoose')

const productdetails=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    category:{
        type:String,
        required:true,
        trim:true
    },
    ratings:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"rating"
        }
    ],
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"review"
        }
    ],
})

module.exports=mongoose.model("Items",productdetails)