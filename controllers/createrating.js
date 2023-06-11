const productdetails=require('../models/product')
const ratings=require('../models/ratings')

const createRating=async (req,res)=>{
    try{
        const {user,stars,productid}=req.body
        const ans=await productdetails.findOne({_id:productid})
        if(! ans){
            return res.status(400).json({
                success:false,
                error:"not post exist with this id"
            })
        }
        const obj=new ratings({
            user,
            stars,
            productid
        })
        const response=await obj.save()
        const resp=await productdetails.findByIdAndUpdate(productid,{$push: {ratings: response._id}},{new:true}).populate("ratings").populate("reviews").exec()
        res.status(200).json({
            success:true,
            rating:stars,
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

module.exports=createRating