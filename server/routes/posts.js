const express=require('express');
const{getPosts,getPost ,createPost,deletePost}=require('../controller/posts')

const router =express.Router();

const{protect} = require('../middleware/auth')

router.get('/',getPosts);
router.get('/:id',getPost);
router.post('/',protect , createPost);
router.delete('/delete/:id',protect,deletePost);

module.exports=router;