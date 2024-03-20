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

const YearlyAgentDetail = mongoose.model("YearlyAgentDetail", agentSchema);

module.exports = YearlyAgentDetail;
