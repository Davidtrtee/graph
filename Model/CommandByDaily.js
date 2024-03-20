const mongoose = require("mongoose");

const CommandSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  sales: {
    type: String,
    required: true,
  },
  userId: String,
});

const DailyCommandDetail = mongoose.model("DailyCommandDetail", CommandSchema);

module.exports = DailyCommandDetail;
