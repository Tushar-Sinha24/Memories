const User = require('../models/User');
const ErrorResponse=require('../utils/errorResponse');


//Get all the users
exports.getUsers =async(req,res,next) =>{
    const user = await User.find();
    if(!user){
        return next(new ErrorResponse(`No user found`), 404);
    }
    res.status(200).json({success:true , user});
};

//Get user By ID

exports.getUser = async(req, res, next)=>{
    
    const user= await User.findById(req.user.id);

    res.status(200).json({
        success:true,
        data:user
    })
}