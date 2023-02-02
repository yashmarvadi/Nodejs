
const express= require("express")
const { get } = require("mongoose")
require("../src/db/connection")
 const MensRanking=require("../src/router/mens")
const app=express()
const port =process.env.PORT || 8000

app.use(express.json())

app.post("/mens", async(req,res)=>{
try{
    const addingMensRecord = new MensRanking(req.body)
    console.log(req.body)  
      const print = await addingMensRecord.save()
      res.send(print)
       
}
 catch(e){
    console.log(e)

 }
})

app.get("/mens", async(req,res)=>{
try{
    const getMens=   await MensRanking.find({})
      res.status(201).send(getMens)
       
}
 catch(e){
    res.status(400).send(e)

 }
})

app.get("/mens/:id", async(req,res)=>{
try{

    const _id=req.params.id
    const getMen=  await MensRanking.findById({_id})
      res.status(201).send(getMen)
       
}
 catch(e){
     console.log(e)
    res.status(400).send(e)


 }
})
app.listen(port,()=> {
    console.log(`connection is live at port no ${port}`)
})