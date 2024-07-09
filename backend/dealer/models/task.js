import mongoose from "mongoose";
import { countermodel } from "../models/sequencing.js";
import Inc from "mongoose-sequence"
const autoIncrement  = Inc(mongoose)

const schema = new mongoose.Schema({
  id :{
  type :Number,
  default :1 ,
  },
  img:{
    type : String , 
    required : true
  },
  title:{
    type : String , 
    required : true
  } ,
   description :{
    type : String,
    // unique : true,
    required : true

  },
  price:{
    type : Number,
    required : true
  },
  qnty:{
   type : Number,
   default :0 
  },
  user :{
   type : mongoose.Schema.Types.ObjectId,
   ref : "User" , 
   required : true,
  },
  createdAt : {
    type : Date,
    default : Date.now,
  }
},
{id : false});
schema.plugin(autoIncrement , { inc_field: 'id' });
// schema.pre("save", function (next) {
//     let doc = this;
//     countermodel.getsequenceNextValue("user_id").
//     then(counter => {
//         console.log("asdasd", counter);
//         if(!counter) {
//             countermodel.insertCounter("user_id")
//             .then(counter => {
//                 doc._id = counter;
//                 console.log(doc)
//                 next();
//             })
//             .catch(error => next(error))
//         } else {
//             doc._id = counter;
//             next();
//         }
//     })
//     .catch(error => next(error))
// });
export const Task = mongoose.model("Task"  , schema)