const express=require('express');
const{getPost ,createPost}=require('../controller/posts')

const router =express.Router();

const{protect} = require('../middleware/auth')

router.get('/',getPost);
router.post('/',protect , createPost);

module.exports=router;