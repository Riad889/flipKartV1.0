const mongoose=require('mongoose');

//Db connection url
const DB_URL=process.env.DB_URL;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase the timeout value to 30 seconds
  };
 mongoose.connect(DB_URL,options).then(()=>{
    console.log("Database connected");
}).catch((error)=>{
    console.log(error);
})