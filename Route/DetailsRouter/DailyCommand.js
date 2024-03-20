const {
  createCommand,
  updateCommand,
  deleteCommand,
  getByIdCommand,
  getAllCommand,
} = require("../../Controller/DailyCommandController");

const DailyCommandRoute = require("express").Router();

DailyCommandRoute.post("/", createCommand);
DailyCommandRoute.put("/:id", updateCommand);
DailyCommandRoute.delete("/:id", deleteCommand);
DailyCommandRoute.get("/:userId", getByIdCommand);
DailyCommandRoute.get("/", getAllCommand);

module.exports = DailyCommandRoute;
