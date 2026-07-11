const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { maxLength } = require("zod");
const { tr, de } = require("zod/locales");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
    },
    passwordHash: {
      type: String,
      required: true,
      select: false,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: [100, "Name cannot exceed 100 characters"],
    },
  },
  {
    timestamps: true,
  },
);

userSchema.static.hashPassword = function (plain) {
  return bcrypt.hashSync(plain, 12);
};

userSchema.method.verifyPassword = function (plain) {
  return bcrypt.compareSync(plain, this.passwordHash);
}

userSchema.method.toJSON = function () {
  const obj = this.toObject();
  delete obj.passwordHash;
  delete obj.__v;
  return obj;
}

module.exports = mongoose.model("User", userSchema);