
import { user } from "../models/user.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { sendCookie } from "../utils/features.js";
import { isAuthenticated } from "../middlewares/auth.js";
import ErrorHandler from "../middlewares/error.js";

export const getallusers = async (req,res)=>{
}

export const createnewusers = async (req,res ,next)=>{
try {
    const {name , email , pannumber , phone , password }= req.body;
    const usermail = await user.findOne({email})
    // if(usermail) return res.status(404).json({
    // success : false,
    // message : "User Already Registered"
    // })
    if(usermail) return next(new ErrorHandler("User Already Registered" , 404));
    const hashedpassword = await bcrypt.hash(password, 10);
    const userdetail = await user.create({name : name , email : email , pannumber : pannumber,phone : phone , password :hashedpassword  });
    sendCookie(userdetail , res ,"Registered Successfully" , 201 );
} catch (error) {
    next(error)
}
}
export const login = async(req , res , next)=>{
try {
    const {email , password} = req.body;
    const usermail = await user.findOne({email}).select("+password");///bcz schema te amra password ta false rekechi to usermail e value ta asbe nah 
    // if(!usermail) return res.status(404).json({
    //     success : false,
    //     message : "User doesnot Exists ! Register First"
    // })
    if(!usermail) return next(new ErrorHandler("User doesnot Exists ! Register First" , 404));
    const isMatch = await bcrypt.compare(password , usermail.password)
    // if(!isMatch) return res.status(404).json({
    //     success : false,
    //     message : "Invalid Password "
    // })
    if(!isMatch) return next(new ErrorHandler("Invalid Password" , 404));
    sendCookie(usermail,res , `Welcome back , ${usermail.name}` ,200 );
} catch (error) {
    next(error)
}



}


export const getuserdetails = (req,res)=>{
        res.status(200).json({
        success : true,
        user : req.userdetail
    })

}
export const logout = (req, res) => {
    res
      .status(200)
      .cookie("token", "", {
        expires: new Date(Date.now()),
        sameSite: process.env.NODE_ENV === "Develpoment" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Develpoment" ? false : true,
      })
      .json({
        success: true,
        user: req.userdetail
      });
  };