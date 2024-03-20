const {
  createAgent,
  updateAgent,
  deleteAgent,
  getByIdAgent,
  getAllAgent,
} = require("../../Controller/DailyAgentController");

const DailyAgentRoute = require("express").Router();

DailyAgentRoute.post("/", createAgent);
DailyAgentRoute.put("/:id", updateAgent);
DailyAgentRoute.delete("/:id", deleteAgent);
DailyAgentRoute.get("/:userId", getByIdAgent);
DailyAgentRoute.get("/", getAllAgent);

module.exports = DailyAgentRoute;
