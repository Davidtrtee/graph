const AgentTarget = require("../Model/TargerForAgent");

const create = async (req, res) => {
  try {
    new AgentTarget(req.body).save();
    res.status(201).json("Agent Target saved successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};
const update = async (req, res) => {
  try {
    const Agent = await AgentTarget.findById(req.params.id);
    if (!Agent) {
      return res.status(404).json({ message: "Agent target id is not found" });
    }
    await AgentTarget.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json("Agent Target update successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};
const deleteTr = async (req, res) => {
  try {
    const Agent = await AgentTarget.findById(req.params.id);
    if (!Agent) {
      return res.status(404).json({ message: "Agent target id is not found" });
    }
    await AgentTarget.findByIdAndDelete(req.params.id);
    res.status(201).json("Agent details delete successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};
const getById = async (req, res) => {
  try {
    const Agent = await AgentTarget.findOne({
      userId: req.params.userId,
    });
    res.status(200).json(Agent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};
const getAll = async (req, res) => {
  try {
    const agent = await AgentTarget.find();
    res.status(200).json(agent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};

module.exports = {
  create,
  update,
  deleteTr,
  getById,
  getAll,
};
