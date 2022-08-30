const express=require('express');
const{getPosts,getPost ,createPost}=require('../controller/posts')

const router =express.Router();

const{protect} = require('../middleware/auth')

router.get('/',getPosts);
router.get('/:id',getPost);
router.post('/',protect , createPost);

module.exports=router;