const express = require('express');

const{register, login , logout ,getMe,fogotPassword , resetpassword}= require('../controller/auth')

const router =express.Router();
const{protect} = require('../middleware/auth')

router.post('/register',register);
router.post('/login',login);
router.get('/me',protect,getMe);

router.get('/logout', logout);
router.post('/fogotPassword',fogotPassword);
router.put('/resetpassword/:resettoken',resetpassword)

module.exports=router;