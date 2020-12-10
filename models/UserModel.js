const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    regirterDate:{
        type:String,
        default:Date.now,
    },
});

module.exports = User = mongoose.model("user", UserSchema)