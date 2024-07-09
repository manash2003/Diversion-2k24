//////////    Route splitting      //////////// 
import express, { Router } from "express";
import { createnewusers, getuserdetails, getallusers ,login , logout } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

///////take  /users/all from app.js and paste it here and give router.get 
router.get("/all" ,getallusers) ///created a getallusers function in /controllers/user.js

router.post("/new" ,createnewusers)
router.post("/login" ,login)

router.get("/me" ,isAuthenticated,getuserdetails)
router.get("/logout" ,logout)



export default router;

////////in route splitting have to give file name as routes 