const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/", async (req, res) => {
  const states = ["disconnected", "connected", "connecting", "disconnecting"];
  res.json({
    status: "ok",
    db: states[mongoose.connection.readyState],
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
