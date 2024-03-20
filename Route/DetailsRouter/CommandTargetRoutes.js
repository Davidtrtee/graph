const {
  createCommand,
  updateCommand,
  deleteCommand,
  getByIdCommand,
  getAllCommand,
} = require("../../Controller/CommandTargetConrtroller");

const CommandTargetRoutes = require("express").Router();
CommandTargetRoutes.post("/", createCommand);
CommandTargetRoutes.put("/:id", updateCommand);
CommandTargetRoutes.delete("/:id", deleteCommand);
CommandTargetRoutes.get("/:userId", getByIdCommand);
CommandTargetRoutes.get("/", getAllCommand);

module.exports = CommandTargetRoutes;
