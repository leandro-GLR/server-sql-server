// DEPENDENCYS
const express = require("express");

// MIDDLEWARES
const { protect, admin } = require("../middlewares/authMiddleware");

// HELPERS
const generateToken = require("../helpers/generateToken");

// MODELS / CLIENT
const UserModel = require("../models/user");

// Como estamos usando express-async-handler podemos dividirlo con servicios?
function auth(app) {
  const router = express.Router();
  app.use("/api/auth", router);

  // SIGN UP
  router.post(
    "/signup",
    asyncHandler(async (req, res) => {
      const { name, email, password } = req.body;

      const userExists = await UserModel.findOne({ email });

      if (userExists) {
        res.status(400);
        throw new Error("User already exists");
      }

      const user = await UserModel.create({
        name,
        email,
        password,
      });

      if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
        });
      } else {
        res.status(400);
        throw new Error("Invalid User Data");
      }
    })
  );

  // LOGIN
  router.post(
    "/login",
    asyncHandler(async (req, res) => {
      const { email, password } = req.body;
      const user = await UserModel.findOne({ email });

      if (user && (await user.matchPassword(password))) {
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
          createdAt: user.createdAt,
        });
      } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
      }
    })
  );
}

module.exports = auth;
