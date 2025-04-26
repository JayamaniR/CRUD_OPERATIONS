const express=require('express');
const { getUserDetails, CreateUser, getUserDetails_byId, updateUserDetails, deleteUserDetails } = require('../controllers/user.controllers');
const router=express.Router();


router.get('/',getUserDetails);
router.post('/',CreateUser);
router.get('/:id',getUserDetails_byId);
router.put('/:id',updateUserDetails);
router.delete('/:id',deleteUserDetails);


module.exports=router;