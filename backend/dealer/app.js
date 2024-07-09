import express, { query } from "express";
// ////router splitting external router 
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js "
import cookieParser from "cookie-parser";
import { errormiddleware } from "./middlewares/error.js";
/////deploying
import cors from 'cors'
// import connectDB  from "./database/database.js";
const app = express()
//deploying nodejs app
 app.use(cors({
    //within origin we pass the frontend url, backend only allow this allow
    // origin: "*", //must be pass though array 
    // Access-Control-Allow-Origin: *
    origin:"http://localhost:5173",
    methods:["GET" , "POST","PUT","DELETE"],
    credentials: true,//by giving true backend allow cookies to give to the frontend
 }))



// // middleware - jetake amra app er moddhe use korte chai seta likhe dilei hbe 
app.use(express.json())
app.use(cookieParser())
app.use("/api/v1/dealer" , userRouter); // then we dont have to use /users in url of /routes/user.js
app.use("/api/v1/task" , taskRouter);

app.get("/" , (req,res)=>{
    res.send("Nice Working");
})
//error handling error middleware
app.use(errormiddleware)



export default app;


