const productdetails=require('../models/product')
const ratings=require('../models/ratings')
const review=require('../models/review')
const createReview=async (req,res)=>{
    try{
        const {user,feedback,productid}=req.body
        const ans=await productdetails.findOne({_id:productid})
        if(! ans){
            return res.status(400).json({
                success:false,
                error:"not post exist with this id"
            })
        }
        const obj=new review({
            user,
            feedback,
            productid
        })
        const response=await obj.save()
        const resp=await productdetails.findByIdAndUpdate(productid,{$push: {reviews: response._id}},{new:true}).populate("reviews").populate("ratings").exec()
        res.status(200).json({
            success:true,
            updatedpost:resp
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            error:err.message
        })
    }
}

module.exports=createReview