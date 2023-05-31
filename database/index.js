import mongoose from "mongoose";

const connectDb = () =>
  mongoose.connect(process.env.MONGO_URI, () => {
    console.log("Database is connected!");
  });

export default connectDb;
