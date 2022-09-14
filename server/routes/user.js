const express = require('express');
const{getUsers,getUser} = require('../controller/user');

const router =express.Router();

const{protect} = require('../middleware/auth');

router.get('/', getUsers);
router.get('/:id', getUser);

module.exports=router;