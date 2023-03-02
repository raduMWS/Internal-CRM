import mongoose from "mongoose";
import Joi from "joi";

// import jwt from "jsonwebtoken";
// import config from "config";

export const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 80,
  },
  gender: {
    type: String,
    minlength: 2,
    maxlength: 30,
  },
});

export function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string()
      .min(3)
      .max(255)
      // .pattern("/^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,5})$ /")
      .required(),
    age: Joi.number().min(18).max(80).required(),
    gender: Joi.string().min(2).max(30),
  });
  return schema.validate(user);
}

const User = mongoose.model("User", userSchema);
// exports.validate = validate;
