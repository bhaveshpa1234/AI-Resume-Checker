const express = require("express");
const { z } = require("zod");

const env = require("../config/env");
const asyncHandler = require("../utils/asyncHandler");
const { ApiError } = require("../utils/ApiError");
const { signToken } = require("../utils/jwt");
const { cookieOptions } = require("../utils/jwt");
const validate = require("../middleware/validate");
const { requireAuth } = require("../middleware/auth");
const { authLimiter } = require("../middleware/rateLimit");
const User = require("../models/User");

const router = express.Router();

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2).max(100),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const profileSchema = z.object({
  name: z.string().min(2).max(100),
});

const passwordSchema = z.object({
  currentPassword: z.string().min(6),
  newPassword: z.string().min(6),
});

function issueSession(res, user) {
  const token = signToken({ userId: user._id });
  res.cookie("token", token, cookieOptions);
}

router.post(
  "/register",
  authLimiter,
  validate(registerSchema),
  asyncHandler(async (req, res) => {
    const { email, password, name } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new ApiError(400, "User already exists");
    }

    const passwordHash = await User.hashPassword(password);
    const user = await User.create({ name, email, passwordHash });

    issueSession(res, user);

    res.status(201).json({ user });
  }),
);

router.post(
  "/login",
  authLimiter,
  validate(loginSchema),
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+passwordHash");
    if (!user) {
      throw new ApiError(400, "Invalid email or password");
    }

    const isMatch = await user.verifyPassword(password);
    if (!isMatch) {
      throw new ApiError(400, "Invalid email or password");
    }

    issueSession(res, user);

    res.json({ user });
  }),
);

router.post(
  "/logout",
  requireAuth,
  asyncHandler(async (req, res) => {
    res.clearCookie("token", cookieOptions);
    res.json({ message: "Logged out successfully" });
  }),
);

router.get(
  "/profile",
  requireAuth,
  asyncHandler(async (req, res) => {
    res.json({ user: req.user });
  }),
);

router.patch(
  "/profile",
  requireAuth,
  validate(profileSchema),
  asyncHandler(async (req, res) => {
    req.user.name = req.body.name;
    await req.user.save();
    res.json({ user: req.user });
  }),
);


router.patch(
  "/password",
  authLimiter,
  requireAuth,
  validate(passwordSchema),
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).select("+passwordHash");
    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const isMatch = await user.verifyPassword(req.body.currentPassword);
    if (!isMatch) {
      throw new ApiError(400, "Current password is incorrect");
    }

    user.passwordHash = await User.hashPassword(req.body.newPassword);
    await user.save();
    res.json({ message: "Password updated successfully" });
  }),
);

module.exports = router;