import { user } from "../models/user.js";
import jwt from 'jsonwebtoken'

export const isAuthenticated=async (req,res , next)=>{
    const {token} = req.cookies;
    if(!token) return res.status(404).json({
        success : false,
        message : "login First"
    })
    // const id = "myid"
    const decodedjwt = jwt.verify(token , process.env.JWT_SECRET);
    req.userdetail = await user.findById(decodedjwt._id);
    next();
}