import mongoose from "mongoose";

function connectDB(){
    mongoose.connect(process.env.MONGO_URI , {
    dbname :"agro-api-dealers",
})
.then((c)=> console.log(`datbase connected with ${c.connection.host}`))
.catch((err)=>console.log(err));
}

export default connectDB;