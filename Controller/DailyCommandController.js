const DailyCommandDetail = require("../Model/CommandByDaily");

const createCommand = async (req, res) => {
  try {
    new DailyCommandDetail(req.body).save();
    res.status(201).json("Command details saved successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};
const updateCommand = async (req, res) => {
  try {
    const Command = await DailyCommandDetail.findById(req.params.id);
    if (!Command) {
      return res
        .status(404)
        .json({ message: "Command detail id is not found" });
    }
    await DailyCommandDetail.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json("Command details update successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};
const deleteCommand = async (req, res) => {
  try {
    const Command = await DailyCommandDetail.findById(req.params.id);
    if (!Command) {
      return res
        .status(404)
        .json({ message: "Command detail id is not found" });
    }
    await DailyCommandDetail.findByIdAndDelete(req.params.id);
    res.status(201).json("Command details delete successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};
const getByIdCommand = async (req, res) => {
  try {
    const Command = await DailyCommandDetail.find({
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
    const agent = await DailyCommandDetail.find();
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
