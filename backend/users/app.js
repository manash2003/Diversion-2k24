import express, { query } from "express";
import userRouter from "./routes/user.js"
import cookieParser from "cookie-parser";
import { errormiddleware } from "./middlewares/error.js";
import cors from 'cors'
const app = express()
//deploying nodejs app
app.use(cors({
    //within origin we pass the frontend url, backend only allow this allow
    origin:"http://localhost:5173", //must be pass though array 
    methods:["GET" , "POST","PUT","DELETE"],
    credentials: true,//by giving true backend allow cookies to give to the frontend
 }))
app.use(express.json())
app.use(cookieParser())
app.use("/api/v1/user" , userRouter); // then we dont have to use /users in url of /routes/user.js
app.get("/" , (req,res)=>{
    res.send("USER Database ");
})
app.use(errormiddleware)


export default app;