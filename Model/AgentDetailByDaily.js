const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
  agentname: {
    type: String,
    required: true,
  },
  sales: {
    type: String,
    required: true,
  },
  userId: String,
});

const DailyAgentDetail = mongoose.model("DailyAgentDetail", agentSchema);

module.exports = DailyAgentDetail;
