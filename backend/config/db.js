import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect
    ('mongodb+srv://samuelmaveke:12345@cluster0.uecinqj.mongodb.net/food-dev').then(()=>console.log("DB connected"));
}