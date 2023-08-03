const express=require('express');
const {addOrder,findOrder,deleteOneOrder} = require('../controllers/order-controller');
const order_router=express.Router();
order_router.post('/:id/addOrder',addOrder);

order_router.get('/user_orders',findOrder);


order_router.delete('/:id/deleteOne',deleteOneOrder);

module.exports=order_router; 