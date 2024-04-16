const { default: mongoose } = require("mongoose");

require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err?.message ?? "failed to connect db"));
