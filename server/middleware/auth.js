const jwt =require('jsonwebtoken');
const User=require('../models/User');
const ErrorResponse=require ('../utils/errorResponse') 

//Protect routes
exports.protect = async(req,res,next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[1];
    }

    // else if(req.cookies.token){
    //     token = req.cookies.token;
    // }

    if(!token){
        return  next(ErrorResponse(`Not authorize to ascess this route`,401))
    }

    try {
        {
            const decode =jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode)

            req.user =await User.findById(decode.id);

            next();
        }
    } catch (error) {
        return  next(ErrorResponse(`Not authorize to ascess this route`,401))
    }
}