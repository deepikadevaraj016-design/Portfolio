const Tool = require("../models/Tool");

const addTool = async (req, res) => {
  try {
    let icon = "";
    if (req.file) {
      icon = `/uploads/${req.file.filename}`;
    } else if (req.body.icon) {
      icon = req.body.icon;
    }

    const tool = await Tool.create({ name: req.body.name, icon });
    res.status(201).json(tool);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getTools = async (req, res) => {
  try {
    const tools = await Tool.find();
    res.json(tools);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteTool = async (req, res) => {
  try {
    const tool = await Tool.findByIdAndDelete(req.params.id);
    if (!tool) return res.status(404).json({ message: "Tool not found" });
    res.json({ message: "Tool deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addTool, getTools, deleteTool };
