const mongoose=require('mongoose');
const connectDB=async()=>{
   await mongoose.connect("mongodb+srv://amal:5PD5lunc5G3DYgkc@cluster0.wemowgv.mongodb.net/devTinder");
};   


module.exports=connectDB;