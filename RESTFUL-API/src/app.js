
const express =require("express")

require("./db/connection")

const Student=require("./modules/student")
const app=express();
const port =process.env.PORT || 3000

app.use(express.json())

app.get("/",(req,res)=> {
    res.send("hello from yash side")
})

app.post("/student" ,(req,res)=>{
    console.log(req.body)

    const user = new Student(req.body)
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((err) =>{
       res.status(400).send(err)
    })
  

}
)
app.listen(port ,()=>
{
     console.log(`from port number${port}`)
})
