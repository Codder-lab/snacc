import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://suyashpotdar:suyash1303@cluster0.x9vzj.mongodb.net/snacc').then(() => console.log("DB Connected"));
}