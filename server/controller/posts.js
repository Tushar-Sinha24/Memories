const Posts = require('../models/Posts');

//Get all the post
exports.getPost =async(req,res) =>{
    try {
        const post=await Posts.find();
        res.status(200).json({ success: true,post});
    } catch (err) {
        res.status(404).json({message:err.message})
    }
    
}; 

//Create new post
exports.createPost =async(req,res,next) =>{
        const post= await Posts.create(req.body);
        res.status(201).json({success:true , post});
}; 

