const CommandTarget = require("../Model/CommandTarget");

const createCommand = async (req, res) => {
  try {
    new CommandTarget(req.body).save();
    res.status(201).json("Command Target saved successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};
const updateCommand = async (req, res) => {
  try {
    const Command = await CommandTarget.findById(req.params.id);
    if (!Command) {
      return res
        .status(404)
        .json({ message: "Command target id is not found" });
    }
    await CommandTarget.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json("Command Target update successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};
const deleteCommand = async (req, res) => {
  try {
    const Command = await CommandTarget.findById(req.params.id);
    if (!Command) {
      return res
        .status(404)
        .json({ message: "Command target id is not found" });
    }
    await CommandTarget.findByIdAndDelete(req.params.id);
    res.status(201).json("Command details delete successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};
const getByIdCommand = async (req, res) => {
  try {
    const Command = await CommandTarget.findOne({
      userId: req.params.userId,
    });
    res.status(200).json(Command);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};
const getAllCommand = async (req, res) => {
  try {
    const agent = await CommandTarget.find();
    res.status(200).json(agent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};

module.exports = {
  createCommand,
  updateCommand,
  deleteCommand,
  getByIdCommand,
  getAllCommand,
};
