import mongoose from "mongoose";

const dbConnect = async () => {
  try {
   await mongoose.connect("mongodb://localhost:27017/ycrub");
    console.log("connected to MongooseDb");
  } catch (error) {
    console.log(error);
  }
};
export default dbConnect;
