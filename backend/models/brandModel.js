import mongoose from "mongoose";

const brandSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    publishDate: {
      type: Date,
      default: Date.now
    },
    image: {
      type: String,
      required: true
    }
  }
);

export const Brand = mongoose.model('Brand', brandSchema);