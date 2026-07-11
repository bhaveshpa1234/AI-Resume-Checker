const {rateLimit,isKeyGenerator} = require("express-rate-limit");

const analyzeLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many requests from this IP, please try again after a minute",
  keyGenerator: isKeyGenerator,
});

const authLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // limit each IP to 10 requests per windowMs
  message: "Too many requests from this IP, please try again after a minute",
});

module.exports = { analyzeLimiter, authLimiter };