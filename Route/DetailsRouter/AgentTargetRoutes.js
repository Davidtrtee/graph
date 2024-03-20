const {
  create,
  update,
  deleteTr,
  getById,
  getAll,
} = require("../../Controller/AgentTargetControlller");
const AgentTargetRoutes = require("express").Router();

AgentTargetRoutes.post("/", create);
AgentTargetRoutes.put("/:id", update);
AgentTargetRoutes.delete("/:id", deleteTr);
AgentTargetRoutes.get("/:userId", getById);
AgentTargetRoutes.get("/", getAll);

module.exports = AgentTargetRoutes;
