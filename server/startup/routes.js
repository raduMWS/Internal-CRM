import express from "express";
import cors from "cors";
import testRoute from "../routes/testRoute.js";
import users from "../routes/user.js";
import error from "../middleware/error.js";

export default function routes(app) {
  app.use(express.json({ limit: "1000mb" }));
  app.use(
    cors({
      exposedHeaders: "x-auth-token",
    })
  );

  // Here will come all the routes
  app.use("/test", testRoute);
  app.use("/api/users", users);

  app.use(error);
}
