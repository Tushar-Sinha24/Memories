const Posts = require('../models/Posts');

//Get all the post
exports.getPosts =async(req,res,next) =>{
    try {
        const post=await Posts.find();
        res.status(200).json({ success: true,post});
    } catch (err) {
        res.status(404).json({message:err.message})
    }
    
}; 

//Get a single post using id
exports.getPost =async(req,res,next) =>{
    const post = await Posts.findById(req.params.id);
    if (!post) {
        return next(new ErrorResponse(`No post With id of ${req.params.id}`), 404);
    }
    res.status(200).json({ success: true, data: post });
}; 

//Create new post
exports.createPost =async(req,res,next) =>{
    //Add User to eq.body
    req.body.user=req.user.id;
    
    const post= await Posts.create(req.body);
    res.status(201).json({success:true , post});
}; 

//delete a post
exports.deletePost =async(req,res,next) =>{
    
    const post= await Posts.create(req.body);
    res.status(201).json({success:true , post});
}; 


