const User= require('../models/User');
const ErrorResponse=require('../utils/errorResponse')

//@desc    Register a user

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


//@desc    Login user
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


//@desc   Log User out | Clear Cookie
exports.logout = async(req,res,next)=>{
    
    res.cookie('token','none',{
        expires:new Date(Date.now()+1000),
        httpOnly:true
    })

    res.status(200).json({
        success:true,
        data:[]
    })

}


//@desc    Current logged in user
exports.getMe =async(req,res,next)=>{
    const user= await User.findById(req.user.id);

    res.status(200).json({
        success:true,
        data:user
    })
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
