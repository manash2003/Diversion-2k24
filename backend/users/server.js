import app from "./app.js"
// import connectDB  from "./database/database.js";
import {config} from "dotenv"

config({
    path : "./config.env",
})
//have to use connectdb for database
// connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`server is working on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})