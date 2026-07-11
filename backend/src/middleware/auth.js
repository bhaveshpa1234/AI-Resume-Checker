const env = require("../config/env");
const { verifyToken } = require("../utils/jwt");
const ApiError = require("../utils/ApiError");
const User = require("../models/User");

async function requireAuth(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return next(ApiError.unauthorized("No token provided"));
    }

    const payload = verifyToken(token);
    const user = await User.findById(payload.userId);
    if (!user) {
      return next(ApiError.unauthorized("Invalid token"));
    }
    req.user = user;
    next();
  } catch (err) {
    return next(ApiError.unauthorized("Invalid token"));
  }
}

module.exports = { requireAuth };
