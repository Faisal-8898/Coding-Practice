import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageLink: {
      type: String,
    },
    published: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Course = mongoose.model("Course", courseSchema);
