const express=require('express')
const app=express()
require('dotenv').config()
app.listen(process.env.port,(req,res)=>{
    console.log(`running at ${process.env.PORT}  port`)
})


app.use(express.json())
const routes=require('./routers/router')
app.use("/v1",routes)
const dbconnectFN=require('./CONFIG/database')
dbconnectFN()