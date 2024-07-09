class ErrorHandler extends Error{
    constructor(message , errcode){
        super(message);
        this.errcode = errcode;

    }
}

export const errormiddleware =(err , req , res ,next)=>{

    err.message = err.message || "internal server error";
    err.errcode = err.errcode || 500 ;
        return res.status(err.errcode).json({
            success: true,
            message : err.message
        })
    }

export default ErrorHandler;