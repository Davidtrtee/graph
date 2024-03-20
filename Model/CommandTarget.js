const mongoose = require("mongoose");
const targetSchema = new mongoose.Schema({
  userId: String,
  target: Number,
});

const CommandTarget = mongoose.model("daily-target", targetSchema);
module.exports = CommandTarget;
