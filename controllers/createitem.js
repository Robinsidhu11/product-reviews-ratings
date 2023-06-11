const productdetails=require('../models/product')

const createItem=async (req,res)=>{
    try{
        const {name,category}=req.body
        const obj=new productdetails({
            name,
            category
        })
        const response=await obj.save()
        res.status(200).json({
            success:true,
            itemadded:response
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            error:err.message
        })
    }
}
const getItems=async (req,res)=>{
    try{
        
        const response=await productdetails.find({}).populate("ratings").populate("reviews").exec()
        res.status(200).json({
            success:true,
            items:response
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            error:err.message
        })
    }
}
module.exports=[createItem,getItems]