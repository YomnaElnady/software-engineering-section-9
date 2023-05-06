import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  birthDate: { type: Date, required: true },
  books: Array,
});

authorSchema.plugin(uniqueValidator);

export const Author = mongoose.model("authors", authorSchema);
