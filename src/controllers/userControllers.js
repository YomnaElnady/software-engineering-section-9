import { User } from "../models/User.js";

const get_all_users = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

const get_one_user = async (req, res) => {
  const user = await User.findOne({ name: req.params.name });
  if (user) {
    res.send(user);
  } else {
    res.status(404).send("The requested user is not found!");
  }
};

const update_one_user = async (req, res) => {
  const user = await User.findOne({ name: req.params.name });
  if (user) {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      nationalId: req.body.nationalId,
      role: req.body.role,
    };
    try {
      const updatedUser = await User.updateOne({ name: req.params.name }, newUser);
      res.send(updatedUser);
    } catch (err) {
      console.log("err", err);
    }
  }
};

const delete_one_user = async (req, res) => {
  const user = await User.findOne({ name: req.params.name });
  if (user) {
    try {
      await User.deleteOne({ name: req.params.name });
      res.send(user);
    } catch (err) {
      console.log("err", err);
    }
  }
};

export { get_all_users, get_one_user, update_one_user, delete_one_user };
