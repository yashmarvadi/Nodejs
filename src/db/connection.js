const mongoose=require("mongoose")
mongoose.set('strictQuery', false);




mongoose.connect("mongodb://127.0.0.1:27017/yash",{
     useNewUrlParser: true,
     useUnifiedTopology:true
})
.then(()=>{
     console.log(" connnection is successful")
})
.catch((e)=>{
    console.log("no connectiiion")
})

// mongoose.connect("mongodb://127.0.0.1:27017/olympics", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("database connected");
//   })
//   .catch((err) => {
//     console.log("Could not connect");
    
//   });
