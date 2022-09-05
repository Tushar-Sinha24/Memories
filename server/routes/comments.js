const express = require('express');
const{getComments , addComment, getComment ,updateComments ,deleteComments} = require('../controller/comments');

const router =express.Router({ mergeParams: true });

const{protect} = require('../middleware/auth');

router.get('/',getComments);
router.get('/:id',getComment);
router.post('/',protect , addComment);
router.put('/:id',protect , updateComments);
router.delete('/:id',protect , deleteComments);

module.exports=router;

