const Comment = require('../models/Comments');
const ErrorResponse = require('../utils/errorResponse');
const Posts = require('../models/Posts');

//@desc    Get all the Comments
//Route    /api/v1/posts/:postId/comments
exports.getComments = async (req, res, next) => {
    console.log(req.params.postID)
    if (req.params.postID) {
        const comments = await Comment.find({ post: req.params.postID });

        return res.status(200).json({
            success: true,
            count: comments.length,
            data: comments
        });
    }
};

//@desc     get Single commnet
//@route    GET/api/v1/comments/:id
//@access   Public
exports.getComment = async (req, res, next) => {
    const comments = await Comment.findById(req.params.id).populate({
        path: 'post',
        select: 'title'
    });

    return res.status(200).json({
        success: true,
        count: comments.length,
        data: comments
    });
}



//@desc     Add Comments
//@route    POST/api/v1/post/:postID/reviews
//@access   Private
exports.addComment = async (req, res, next) => {
    req.body.post = req.params.postID;
    req.body.user = req.user.id;


    const posts = await Posts.findById(req.params.postID);

    if (!posts) {
        return next(new ErrorResponse(`No Post With id of ${req.params.postID}`, 404));
    }


    const comment = await Comment.create(req.body);

    res.status(201).json({
        success: true,
        data: comment
    });
};

//@desc     Update Comments
//@route    PUT/api/v1/comments/:id
//@access   Private

exports.updateComments = async (req, res, next) => {
    let comment = await Comment.findById(req.params.id);

    if (!comment) {
        return next(new ErrorResponse(`No Comment With id of ${req.params.id}`, 404));
    }

    //Make Sure Comment belongs to the same User
    if (comment.user.toString() !== req.user.id) {
        return next(new ErrorResponse(`Not Authorised to update Review`, 401));
    }

    comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: comment
    });
};

//@desc     Delete Comments
//@route    PUT/api/v1/comments/:id
//@access   Private
exports.deleteComments = async (req, res, next) => {
    let comment = await Comment.findById(req.params.id);

    if (!comment) {
        return next(new ErrorResponse(`No Comment With id of ${req.params.id}`, 404));
    }

    //Owener of post can also delete the comment
    let owner = await Posts.findById(comment.post)
    // console.log(owner.user);
    if (owner.user.toString() === req.user.id) {
        comment.remove();
        return res.status(201).json({ success: true, data: {} });
    }

    //Make Sure Comment belongs to the same User
    if (comment.user.toString() !== req.user.id) {
        return next(new ErrorResponse(`Not Authorised to update Review`, 401));
    }


    comment.remove();
    res.status(201).json({ success: true, data: {} });
};

