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

const YearlyCommandDetail = mongoose.model(
  "yearlyCommandDetail",
  CommandSchema
);

module.exports = YearlyCommandDetail;
