import mongoose from "mongoose";

export default function (req, res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404).send("InvalidID");
  }
  next();
}
