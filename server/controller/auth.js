const User= require('../models/User');
const ErrorResponse=require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');


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


//@desc     Get current logged in user
//@route    POST/api/v1/auth/me
//@access   Private
exports.getMe =async(req,res,next)=>{
    const user= await User.findById(req.user.id);

    res.status(200).json({
        success:true,
        data:user
    })
};


//@desc     Forgot password
//@route    POST/api/v1/auth/forgotpassword
//@access   Public
exports.fogotPassword =async(req,res,next)=>{
    const user= await User.findOne({email:req.body.email});

    if(!user){
        return next(new ErrorResponse('User does not exist', 404));
    }
    //get reset token
    const resetToken=user.getResetPasswordToken();

    await user.save({validateBeforeSave:false});

    //Create reset Url
    const resetUrl=`${req.protocol}://${req.get('host')}/api/v1/auth/resetpassword/${resetToken}`;
    const message = `if U want to reset your password then make a put request to: \n\n ${resetUrl}`;

    try {
        await sendEmail({
            email:user.email,
            subject:"password reset Token",
            message
        });
        res.status(200).json({success:true})
    } catch (err) {
        console.log(err);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpie = undefined;

        await user.save({validateBeforeSave:false});
        return next(new ErrorResponse('Email Could not be sent',500))
    }
};


//@desc     Reset Password
//@route    POST/api/v1/auth/resetpassword/:resettoken
//@access   Public

exports.resetpassword =async(req,res,next)=>{
    //Get hashed Token
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.resettoken).digest('hex');

    const user= await User.findOne({
        resetPasswordToken,
        resetPasswordExpie :{$gt:Date.now()}
    });

    if(!user){
        return next(new ErrorResponse('User does not exist', 404));
    }
    //Set new Password 
    this.Password = req.body.password;
    user.resetPasswordToken=undefined;
    user.resetPasswordExpie=undefined

    await user.save();

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