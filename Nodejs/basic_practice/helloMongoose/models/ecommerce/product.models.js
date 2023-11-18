import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    catagory: {
      type: mongoose.Schema.Type.ObjectId,
      ref: User,
    },
  },
  { timestamps: true }
);
export const Product = mongoose.model("Product", productSchema);
