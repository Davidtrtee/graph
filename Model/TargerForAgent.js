const mongoose = require("mongoose");
const targetSchema = new mongoose.Schema({
  userId: String,
  amount: Number,
});

const AgentTarget = mongoose.model("total-amount", targetSchema);
module.exports = AgentTarget;
