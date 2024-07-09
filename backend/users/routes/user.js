//////////    Route splitting      //////////// 
import express, { Router } from "express";
import { createnewusers, getuserdetails, getallusers ,login , logout } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
import connectuserDB from "../database/userdatabase.js";
const router = express.Router();
import {config} from "dotenv"

config({
    path : "./config.env",
})
///////take  /users/all from app.js and paste it here and give router.get 
router.get("/all" ,getallusers) ///created a getallusers function in /controllers/user.js

router.post("/new" ,createnewusers)
router.post("/login" ,login)

router.get("/me" ,isAuthenticated,getuserdetails)
router.get("/logout" ,logout)

connectuserDB();


export default router;