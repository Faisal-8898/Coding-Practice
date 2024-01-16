import mongoose from "mongoose";

const db_name = "todo_assignment";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${db_name}`,
    );
    console.log(
      "\n MongoDB connected !!! DB HOST",
      connectionInstance.connection.host,
    );
  } catch (error) {
    console.error("MongoDB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
