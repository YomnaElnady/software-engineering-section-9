import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const bookSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  language: String,
  pages: Number,
  title: { type: String, unique: true, required: true },
  year: Number,
  link: String,
  price: { type: Number, required: true },
});

bookSchema.plugin(uniqueValidator);

export const Book = mongoose.model("books", bookSchema);
