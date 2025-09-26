const express = require("express");
const router = express.Router();
const multer = require("multer");
const { addTool, getTools, deleteTool } = require("../controllers/toolController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

router.post("/", upload.single("icon"), addTool);
router.get("/", getTools);
router.delete("/:id", deleteTool);

module.exports = router;
