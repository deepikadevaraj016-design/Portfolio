const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
},
  level: String, 
  icon: String
}, { timestamps: true });

module.exports = mongoose.model("Skill", skillSchema);
