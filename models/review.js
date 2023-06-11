const mongoose=require('mongoose')

const review=new mongoose.Schema({
    user:{
        type:String,
        required:true,
        trim:true
    },
    feedback:{
        type:String,
        required:true,
        trim:true
    },
    productid: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Items"
        },
    
})
module.exports= mongoose.model("review",review)