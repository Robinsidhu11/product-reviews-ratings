const express=require('express')
const routes=express.Router()

const [createItem,getItems]=require('../controllers/createitem')
const createRating=require('../controllers/createrating')
const createreview=require('../controllers/createreview')
routes.get("/getitems",getItems)
routes.post("/createitem",createItem)
routes.post("/createrating",createRating)
routes.post("/createreview",createreview)
module.exports=routes