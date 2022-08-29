const User= require('../models/User');

//Register a user

exports.register = async(req,res)=>{
    const {name,email,password}=req.body;

    //Create a user
    const user=await User.create({
        name,
        email,
        password
    })

    res.status(200).json({success:true, user});
}

//Login user
exports.login=async(req,res)=>{
    const {email,password}=req.body;

    if(!email || !password){
        return res.status(404).json('Please provide and email and password');
        
    }

    //check for user
    const user= await User.findOne({email}).select('+password');

    if(!user){
        return res.status(401).json('Invalid Credential');
    }

    //Check if password matches
    const isMatch = await user.matchPassword(password) 

    if(!isMatch){
        return res.status(401).json('Invalid Credential');
    }

    res.status(200).json({ success: true , user})
}
