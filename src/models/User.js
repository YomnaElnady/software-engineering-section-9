import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
  phoneNumber: { type: Number, length: 11 },
  nationalId: { type: Number, required: true, unique: true, length: 14 },
  role: { type: String, required: true, enum: ["Admin", "User"], default: "User" },
});

userSchema.plugin(uniqueValidator);

// do something after user is created
userSchema.post("save", async function (next) {
  console.log("User is created successfuly");
  //next();
});

// do something before creating the user
userSchema.pre("save", async function (next) {
  console.log("User is about to be saved");
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export const User = mongoose.model("users", userSchema);
