const mongoose=require('mongoose');

const orderSchema=new mongoose.Schema({

    location:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    food_orders:[
        {
            product_name:{
                type:String,
                required:true,
            },
            product_price:{
                type:String,
                required:true,
            },
            product_picture:{
                type:String,
                required:true
            },
            product_quantity:{
                type:Number,
                required:true
            },
        }
       
       
    ],
    
    

})

const OrderSchema=mongoose.model("Order",orderSchema);

module.exports=OrderSchema;