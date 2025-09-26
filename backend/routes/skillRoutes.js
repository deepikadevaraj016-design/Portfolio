const express = require("express");
const router = express.Router();
const multer = require("multer");
const { addSkill, getSkills, deleteSkill } = require("../controllers/skillController");

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

// Routes
router.post("/", upload.single("icon"), addSkill);  // Add skill
router.get("/", getSkills);                        // Get all skills
router.delete("/:id", deleteSkill);               // Delete skill by ID

module.exports = router;
