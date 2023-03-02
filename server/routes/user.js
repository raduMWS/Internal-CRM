import express from "express";
import { userSchema, validateUser } from "../models/user.js";
import mongoose from "mongoose";
import validateObjectId from "../middleware/validateObjectId.js";

const router = express.Router();

const User = mongoose.model("User", userSchema);

router.get("/", async (req, res) => {
  const users = await User.find({}).select({
    id: 1,
    name: 1,
    email: 1,
    age: 1,
    gender: 1,
  });
  res.send(users);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const user = await User.findById(req.params.id);
  console.log(user);
  if (!user) res.status(404).send("The user could not be found");

  res.send(user);
});

router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    age: req.body.age,
  });

  user = await user.save();

  res.send(user);
});

router.put("/:id", validateObjectId, async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
      gender: req.body.gender,
    },
    {
      new: true,
    }
  );

  if (!user)
    return res.status(404).send("The user with the given ID was not found.");

  res.send(user).status(200);
});

router.delete("/:id", async (req, res) => {
  const user = await User.findById({ _id: req.params.id });
  if (!user) {
    return res.status(404).send("User does not exist");
  }

  const result = await User.findByIdAndDelete({ _id: req.params.id });
  res.send(result);
});

export default router;
