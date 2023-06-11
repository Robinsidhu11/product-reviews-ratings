const mongoose=require('mongoose')

const rating=new mongoose.Schema({
    user:{
        type:String,
        required:true,
        trim:true
    },
    stars:{
        type:Number,
        required:true,
    },
    productid: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Items"
        },
    
})
module.exports= mongoose.model("rating",rating)