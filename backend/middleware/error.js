
import ErrorHandler from "../utils/ErrorHandler";

export default (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.message = err.message || "Internal eerver Error";


    //wrong MongoDB id error
    if(err.name === 'CastError'){
        const message = `Resource not found with id.. Invalid ${err.value}`;
        err = new ErrorHandler(message, 400);
    }

    //Duplicate key error
    if(err.code === 11000){
        const message = `${Object.keys(err.keyValue)} already exists`;
        err = new ErrorHandler(message, 400);
    }

    //Mongoose validation errors
    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(val=> val.message)[0];
        err = new ErrorHandler(message, 400);
    }
    //JWT auth middleware error
    if(err.name === 'UnauthorizedError' || 'JsonWenTokenError'){
        const message ='Invalid url please try again letter';
        err = new ErrorHandler(message, 401);
    }
}