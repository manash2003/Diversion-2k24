////we want to use this in models in routes/user.js so have to export before use 
import mongoose from "mongoose";


const schema = new mongoose.Schema({

  name:{
    type : String,
    required : true , 
    unique : true,

  } ,
  email :{
    type : String,
    required : true , 
    unique : true,
  },
  pannumber:{
    type : String,
    required : true , 
    unique : true,
  },
  license:{
    type : String,
    required : true , 
    unique : true,
  },
  phone:{
    type : String,
    required : true , 
    unique : true,
  },
  password : {
    type : String,
    required : true , 
    select :false,
  },
  createdAt : {
    type : Date,
    // required : true , 
    default : Date.now,
  },

},
);


export const user = mongoose.model("User"  , schema)