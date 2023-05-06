import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: 2 * 24 * 60 * 60 });
};

const post_one_user = async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    nationalId: req.body.nationalId,
    role: req.body.role,
  };
  try {
    const userData = await User.create(user);
    res.status(201).json(userData);
  } catch (error) {
    res.send(error);
  }
};

const login_user = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        const token = createToken(user._id);
        console.log("token", token);
        res.cookie("jwt", token);
        res.send(user);
      } else {
        res.status(404).send("Incorrect password");
      }
    } else {
      res.send("This email is not registered!");
    }
  } catch (err) {
    console.log("err", err);
  }
};

export { post_one_user, login_user };
