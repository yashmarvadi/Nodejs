
const mongoose=require("mongoose")

const menSchema = new mongoose.Schema({
    ranking:{
        type: Number,
        require:true,
        unique:true,
    },
    name:{
        type:String,
        rquired:true,
        trim:true
    },
    dob:{
        type:Date,
        rquired:true,
        trim:true
    },
    
     Country:{
        type:String,
        rquired:true,
        trim:true
    },
    Score:{
        type:String,
        rquired:true,
        trim:true,
        
    },
    Event:{
        type:String,
        default:"100 m"
    }
})
 
 //we are ceating collection with name: mesranking 
const MensRanking = new mongoose.model("MensRanking",menSchema)


module.exports=MensRanking;