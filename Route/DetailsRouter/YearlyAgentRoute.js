const {
  createAgent,
  updateAgent,
  deleteAgent,
  getByIdAgent,
  getAllAgent,
} = require("../../Controller/YearlyAgentController");

const YearlyAgentRoute = require("express").Router();

YearlyAgentRoute.post("/", createAgent);
YearlyAgentRoute.put("/:id", updateAgent);
YearlyAgentRoute.delete("/:id", deleteAgent);
YearlyAgentRoute.get("/:userId", getByIdAgent);
YearlyAgentRoute.get("/", getAllAgent);

module.exports = YearlyAgentRoute;
