const AuthRoutes = require("./AuthRoutes");
const AgentTargetRoutes = require("./DetailsRouter/AgentTargetRoutes");
const CommandTargetRoutes = require("./DetailsRouter/CommandTargetRoutes");
const DailyAgentRoute = require("./DetailsRouter/DailyAgentRoute");
const DailyCommandRoute = require("./DetailsRouter/DailyCommand");
const YearlyAgentRoute = require("./DetailsRouter/YearlyAgentRoute");
const YearlyCommandRoute = require("./DetailsRouter/YearlyCommand");

const Router = require("express").Router();
Router.use("/daily-agent", DailyAgentRoute);
Router.use("/yearly-agent", YearlyAgentRoute);
Router.use("/daily-command", DailyCommandRoute);
Router.use("/yearly-command", YearlyCommandRoute);
Router.use("/target-agent", AgentTargetRoutes);
Router.use("/target-command", CommandTargetRoutes);
Router.use("/auth", AuthRoutes);

module.exports = Router;
