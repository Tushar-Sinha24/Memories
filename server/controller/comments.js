const Comment = require('../models/Comments');
const ErrorResponse=require('../utils/errorResponse');
const Posts = require('../models/Posts');

//@desc    Get all the Comments
//Route    /api/v1/posts/:postId/comments
exports.getComments = async (req, res, next) => {
       
       if(req.params.postId){
        const comments=Comment.find({ post: req.params.bootcampId });
        return res.status(200).json({
            success: true,
            count: comments.length,
            data: comments
        });
       }
};


//@desc     Add Comments
//@route    POST/api/v1/post/:postID/reviews
//@access   Private
exports.addReview = asyncHandler(async (req, res, next) => {
    req.body.post = req.params.postId;
    req.body.user = req.user.id;

    const post = await Posts.findById(req.params.postID);

    if (!post) {
        return next(new ErrorResponse(`No Post With id of ${req.params.bootcampDd}`,404));
    }

    
    const comment=await Comment.create(req.body);

    res.status(201).json({
        success:true,
        data:comment
    });
});
