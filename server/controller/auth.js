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
