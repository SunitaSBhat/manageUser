const {Schema, model, trusted }= require("mongoose");
const userSchema= new Schema({
   name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    }

})


const user = model("user", userSchema);
module.exports= user;