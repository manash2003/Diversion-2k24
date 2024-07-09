import mongoose from "mongoose";

function connectuserDB(){
    mongoose.connect( process.env.MONGO_URI, {
    dbname :"agro-api-users",
})
.then((c)=> console.log(`Users database connected with ${c.connection.host}`))
.catch((err)=>console.log(err));
}

export default connectuserDB;