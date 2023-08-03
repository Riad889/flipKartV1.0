const express=require('express');
const router=express.Router();
const {signUp,LoginUser, getSingleUser, updateUserInformation}=require('../controllers/user-controllers');
const {
  getAllProducts,
  getSpecificProduct,
  addProduct,
 
} = require("../controllers/product-contollers");

//homePage
//signUp

router.post('/signup',signUp);

// login the user

router.post ('/login',LoginUser);

//get all the products

router.get('/products',getAllProducts);

//get a specific product

router.get('/products/:id',getSpecificProduct);

//add data to server

router.post('/add',addProduct);


// get single user

router.get('/user/:id',getSingleUser);


// update user information 

router.post('/:id/update',updateUserInformation);

module.exports=router;