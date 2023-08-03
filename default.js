const product=require('./constrains/data');
const ProductDetail=require('./models/product-schema');
const defaultData = async () => {
    try {
       // console.log(product);
       // await ProductDetail.insertMany(product);
        //console.log("Data inserted successfully");
    } catch (error) {
        console.log(error.message);
        
    }
};
module.exports = defaultData;