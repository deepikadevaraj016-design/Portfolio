const Skill = require("../models/Skill");

// Add a skill
const addSkill = async (req, res) => {
  try {
    const { name, level } = req.body;
    let icon = "";

    if (req.file) {
      icon = `/uploads/${req.file.filename}`; // save relative path
    } else if (req.body.icon) {
      icon = req.body.icon; // Base64 string if pasted
    }

    const skill = await Skill.create({ name, level, icon });
    res.status(201).json(skill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all skills
const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a skill by ID
const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) return res.status(404).json({ message: "Skill not found" });
    res.json({ message: "Skill deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addSkill, getSkills, deleteSkill };
