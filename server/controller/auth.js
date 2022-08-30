const User= require('../models/User');
const ErrorResponse=require('../utils/errorResponse')

//Register a user

exports.register = async(req,res)=>{
    const {name,email,password}=req.body;

    //Create a user
    const user=await User.create({
        name,
        email,
        password
    })

    
    sendTokenResponse(user,200,res);

}

//Login user
exports.login=async(req,res,next)=>{
    const {email,password}=req.body;

    if(!email || !password){
        return next(new ErrorResponse('Please provide and email and password' ,404));
        
    }

    //check for user
    const user= await User.findOne({email}).select('+password');

    if(!user){
        return next(new ErrorResponse('Invalid Credential' ,404));
    }

    //Check if password matches
    const isMatch = await user.matchPassword(password) 

    if(!isMatch){
        return next(new ErrorResponse('Invalid Credential' ,404));
    }

    sendTokenResponse(user,200,res);
};





//Get token from model, create cookie and send response
const sendTokenResponse = (user , statusCode , res)=>{
    //Create Token
    const token = user.getsignedJwtToken();

    const option={
        expires:new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE *24 * 60* 60 * 1000),
        httpOnly:true
    };


    
    res.status(statusCode)
    .cookie('token',token,option)
    .json({
        success:true,
        token
    });

}
