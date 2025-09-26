const mongoose = require("mongoose");

const toolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: String, // path or Base64 string
}, { timestamps: true });

module.exports = mongoose.model("Tool", toolSchema);
