const {
  createCommand,
  updateCommand,
  deleteCommand,
  getByIdCommand,
  getAllCommand,
} = require("../../Controller/YearlyCommand");

const YearlyCommandRoute = require("express").Router();

YearlyCommandRoute.post("/", createCommand);
YearlyCommandRoute.put("/:id", updateCommand);
YearlyCommandRoute.delete("/:id", deleteCommand);
YearlyCommandRoute.get("/:userId", getByIdCommand);
YearlyCommandRoute.get("/", getAllCommand);

module.exports = YearlyCommandRoute;
