const express=require('express');
const{getPosts,getPost ,createPost,deletePost,updatePost}=require('../controller/posts')

//Include Other resource Routers
const commentRouter = require('./comments');

const router =express.Router();

//Re-route into other Resource Router
router.use('/:postID/comment' , commentRouter)

const{protect} = require('../middleware/auth')

router.get('/',getPosts);
router.get('/:id',getPost);
router.post('/',protect , createPost);
router.delete('/delete/:id',protect,deletePost);
router.put('/update/:id' , protect , updatePost)

module.exports=router;