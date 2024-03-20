const YearlyAgentDetail = require("../Model/AgentDetailByYearly");

const createAgent = async (req, res) => {
  try {
    new YearlyAgentDetail(req.body).save();
    res.status(201).json("Agent details saved successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};
const updateAgent = async (req, res) => {
  try {
    const agent = await YearlyAgentDetail.findById(req.params.id);
    if (!agent) {
      return res.status(404).json({ message: "Agent detail id is not found" });
    }
    await YearlyAgentDetail.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json("Agent details update successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};
const deleteAgent = async (req, res) => {
  try {
    const agent = await YearlyAgentDetail.findById(req.params.id);
    console.log(agent);
    if (!agent) {
      return res.status(404).json({ message: "Agent detail id is not found" });
    }
    await YearlyAgentDetail.findByIdAndDelete(req.params.id);
    res.status(201).json("Agent details delete successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};
const getByIdAgent = async (req, res) => {
  try {
    const agent = await YearlyAgentDetail.find({ userId: req.params.userId });
    if (!agent) {
      return res.status(404).json({ message: "Agent detail id is not found" });
    }
    res.status(200).json(agent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};
const getAllAgent = async (req, res) => {
  try {
    const agent = await YearlyAgentDetail.find();
    res.status(200).json(agent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};

module.exports = {
  createAgent,
  updateAgent,
  deleteAgent,
  getByIdAgent,
  getAllAgent,
};
