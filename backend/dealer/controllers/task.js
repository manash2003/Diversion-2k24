import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";

export const newtask =async(req,res,next)=>{
try {

    const {img , title , description, price} = req.body;
    await Task.create({
       img , title , description ,price , user:req.userdetail
    })
    res.status(201).json({
       success : true,
       message : "Task added Successfully"
    });
    
} catch (error) {
    next(error);
}
}
export const getmytask=async(req,res , next)=>{
    try {
        const userid = req.userdetail._id;

        const tasks = await Task.find({user : userid})
        res.status(201).json({
            success : true,
            tasks
        })
    } catch (error) {
        next(error);
    }

}


export const getalltask=async(req,res , next)=>{
    try{
        const tasks = await Task.find({})
        
        res.json({
            success : true,
            tasks
        })
    }catch(error){
        next(error);
    }
}
export const updatetask=async(req,res , next)=>{
try {
    const id = req.params.id;
    const task = await Task.findById(id);
    // if(!task) return res.status(404).json({
    //     success: true,
    //     message : "invalid id"
    // })
    if(!task) return next(new ErrorHandler("Invalid ID" , 404));
    task.isCompleted = !task.isCompleted;
    await task.save();
    res.status(201).json({
        success : true,
        message : "Task updated"
        
    })
} catch (error) {
    next(error);
}
}
export const deletetask=async(req,res , next)=>{
try {
    const id = req.params.id;
    const task = await Task.findById(id);
    // task.isCompleted = !task.isCompleted;
    if(!task) return next(new ErrorHandler("Task not found" , 404));
    // await task.remove();
    await task.deleteOne();
    res.status(201).json({
        success : true,
        message : " Task Deleted"
        
    })
} catch (error) {
    next(error);
    // console.log(error);
}
}