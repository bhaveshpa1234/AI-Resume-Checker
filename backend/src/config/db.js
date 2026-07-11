const moongose = require("mongoose");
const env = require("./env");

moongose.set("strictQuery", true);

async function connectDB() {
  const conn = await moongose.connect(env.mongoUri, {
    serverSelectionTimeoutMS: 10_000,
  });
  console.log(`MongoDB Connected: ${conn.connection.host}`);

  moongose.connection.on("error", (err) => {
    console.error(`MongoDB connection error: ${err}`);
  });
  moongose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected");
  });
}

module.exports = { connectDB };
